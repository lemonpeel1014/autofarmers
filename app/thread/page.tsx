'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card } from '@/components/ui/card';
import UserChatBubble from '@/components/UserChatBubble';
import Image from 'next/image';
import { useCallback, useState } from 'react';
import UserMessageInput from '@/components/UserMessageInput';
import { Skeleton } from '@/components/ui/skeleton';
import { cn } from '@/lib/utils';
import AgentChatBubble from '@/components/AgentChatBubble';
import { Agent, AGENT_SWAVV, AGENT_YIELDO } from '@/data/agents';
import AgentProfile from '@/components/AgentProfile';
import { useSearchParams } from 'next/navigation';
import { useGetMessages, useAddMessage } from '@/hooks/thread';
import { useRunAgents } from '@/hooks/runtime';
import { last } from 'lodash-es';

const AGENTS: Record<string, Agent> = {
  yieldo: AGENT_YIELDO,
  swavv: AGENT_SWAVV,
};
export default function Home() {
  const searchParams = useSearchParams();
  const threadId = parseInt(searchParams.get('id') ?? '0');
  const [input, setInput] = useState('');

  const { data: messages } = useGetMessages({
    threadId,
  });

  const { mutate: runAgents } = useRunAgents({
    threadId,
    onSuccess: () => {
      console.log('Agents run successfully');
    },
  });
  const { mutate: addMessage } = useAddMessage({
    threadId,
    onMutate: (message) => {
      setInput('');
      messages?.push({
        id: Date.now().valueOf(),
        sender: 'USER',
        content: message,
        toolCalls: [],
        metadata: {},
      });
    },
    onSuccess: (agentNames) => {
      runAgents(agentNames);
    },
  });

  const onSubmit = useCallback(
    (message?: string) => {
      addMessage(message || input);
    },
    [addMessage, input],
  );

  const handleOnClickConfirm = useCallback(
    (message?: string) => {
      onSubmit(message);
    },
    [onSubmit],
  );

  const handleOnClickCancel = useCallback(() => {
    if (!messages) return;

    onSubmit(`@${last(messages)?.sender} cancel`);
  }, [messages, onSubmit]);

  return (
    <div className="flex size-full gap-4">
      {/* Agent Section */}
      <Card className="flex h-full w-[8.125rem] flex-col items-center justify-start gap-20 pt-10">
        <Image priority alt="Logo" src="/logo.png" width={46} height={45} />
        <div className="flex flex-col gap-4 overflow-x-auto">
          {Object.values(AGENTS).map((agent, i) => {
            return (
              <AgentProfile
                key={`agent-side-${i}`}
                size="lg"
                profileImage={agent.profileImage}
              />
            );
          })}
        </div>
      </Card>

      {/* Chat Section */}
      <Card className="flex max-w-[50rem] flex-1 flex-col gap-0 py-0">
        {/* Chat Header */}
        <div className="flex flex-col gap-4 border-b border-gray-200 px-8 py-5">
          <h1 className="text-center text-2xl font-semibold">Autofarmers</h1>
          <div className="flex w-full gap-10 overflow-x-auto">
            {Object.values(AGENTS).map((agent, i) => {
              return (
                <div
                  key={`agent-${i}`}
                  className="flex flex-col items-center gap-y-1"
                >
                  <div className="relative">
                    <Avatar
                      className={cn('z-10', {
                        'grayscale-75': false,
                      })}
                    >
                      <AvatarImage src={agent.profileImage} />
                      <AvatarFallback>
                        <Skeleton className="size-full" />
                      </AvatarFallback>
                    </Avatar>
                    <div className="ring-primary absolute inset-0 z-0 animate-pulse rounded-full ring-3"></div>
                  </div>
                  <span className="animate-opacity-appear">{agent.name}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Chat Messages */}
        {messages && (
          <div className="flex grow flex-col gap-4 overflow-y-auto pr-10 pl-6">
            {messages.map((message, i) => {
              const isLastMessage = i === messages.length - 1;

              if (message.sender !== 'USER') {
                return (
                  <AgentChatBubble
                    key={`chat-agent-message-${i}`}
                    id={message.id}
                    agent={AGENTS[message.sender.toLowerCase()]}
                    text={message.content}
                    isLastMessage={isLastMessage}
                    metadata={message.metadata}
                    onClickConfirm={handleOnClickConfirm}
                    onClickCancel={handleOnClickCancel}
                  />
                );
              } else {
                return (
                  <UserChatBubble
                    key={`chat-user-message-${i}`}
                    id={i}
                    text={message.content}
                  />
                );
              }
            })}
          </div>
        )}

        {/* Chat Input */}
        <div className="px-2 pb-2">
          <UserMessageInput
            value={input}
            onChange={setInput}
            onSubmit={onSubmit}
          />
        </div>
      </Card>

      {/* Mission Section */}
      <Card className="flex flex-1 flex-col"></Card>
    </div>
  );
}

'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card } from '@/components/ui/card';
import UserChatBubble from '@/components/UserChatBubble';
import Image from 'next/image';
import { useCallback, useState } from 'react';
import UserMessageInput from '@/components/UserMessageInput';
import { Skeleton } from '@/components/ui/skeleton';
import { cn } from '@/lib/utils';
import { MESSAGES } from '@/data/messages';
import AgentChatBubble from '@/components/AgentChatBubble';
import { AGENT_SWAVV, AGENT_YIELDO } from '@/data/agents';
import AgentProfile from '@/components/AgentProfile';
import { useSearchParams } from 'next/navigation';

const AGENTS = [AGENT_YIELDO, AGENT_SWAVV];
export default function Home() {
  const searchParams = useSearchParams();
  const threadId = parseInt(searchParams.get('id') ?? '0');
  const [input, setInput] = useState('');

  console.log('threadId ::: ', threadId);

  const onSubmit = useCallback(() => {
    setInput('');
  }, [setInput]);

  const handleOnClickConfirm = useCallback((message?: string) => {
    // TODO: add confirm message
    console.log('confirm ::: ', message);
    setInput('');
  }, []);

  const handleOnClickCancel = useCallback(() => {
    // TODO: add cancel message
    setInput('');
  }, []);

  return (
    <div className="flex size-full gap-4">
      {/* Agent Section */}
      <Card className="flex h-full w-[8.125rem] flex-col items-center justify-start gap-20 pt-10">
        <Image priority alt="Logo" src="/logo.png" width={46} height={45} />
        <div className="flex flex-col gap-4 overflow-x-auto">
          {AGENTS.map((agent, i) => {
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
            {AGENTS.map((agent, i) => {
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
        <div className="flex grow flex-col gap-4 overflow-y-auto pr-10 pl-6">
          {MESSAGES.map((message, i) => {
            const isLastMessage = i === MESSAGES.length - 1;

            if (message.type === 'agent') {
              return (
                <AgentChatBubble
                  key={`chat-agent-message-${i}`}
                  id={message.id}
                  agent={message.agent ?? AGENT_YIELDO}
                  text={message.text}
                  isLastMessage={isLastMessage}
                  toolName={message.toolName}
                  metadata={message.metadata}
                  onClickConfirm={handleOnClickConfirm}
                  onClickCancel={handleOnClickCancel}
                />
              );
            }
            if (message.type === 'user') {
              return (
                <UserChatBubble
                  key={`chat-user-message-${i}`}
                  id={i}
                  text={message.text}
                />
              );
            }
          })}
        </div>

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

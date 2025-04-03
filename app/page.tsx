"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import UserChatBubble from "@/components/UserChatBubble";
import Image from "next/image";
import { useCallback, useState } from "react";
import UserMessageInput from "@/components/UserMessageInput";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import { MESSAGES } from "@/data/messages";
import AgentChatBubble from "@/components/AgentChatBubble";
import { AGENT_SWAVV, AGENT_YIELDO } from "@/data/agents";
import AgentProfile from "@/components/AgentProfile";

const AGENTS = [AGENT_YIELDO, AGENT_SWAVV];
export default function Home() {
  const [input, setInput] = useState("");

  const onSubmit = useCallback(() => {
    setInput("");
  }, [setInput]);

  const handleOnClickConfirm = useCallback((message?: string) => {
    // TODO: add confirm message
    console.log("confirm ::: ", message);
    setInput("");
  }, []);

  const handleOnClickCancel = useCallback(() => {
    // TODO: add cancel message
    setInput("");
  }, []);

  return (
    <div className="flex size-full gap-4">
      {/* Agent Section */}
      <Card className="h-full flex flex-col justify-start w-[8.125rem] pt-10 gap-20 items-center">
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
      <Card className="flex flex-col flex-1 max-w-[50rem] gap-0 py-0">
        {/* Chat Header */}
        <div className="flex flex-col border-b border-gray-200 py-5 px-8 gap-4">
          <h1 className="text-center text-2xl font-semibold">Autofarmers</h1>
          <div className="flex gap-10 w-full overflow-x-auto">
            {AGENTS.map((agent, i) => {
              return (
                <div
                  key={`agent-${i}`}
                  className="flex flex-col gap-y-1 items-center"
                >
                  <div className="relative">
                    <Avatar
                      className={cn("z-10", {
                        "grayscale-75": false,
                      })}
                    >
                      <AvatarImage src={agent.profileImage} />
                      <AvatarFallback>
                        <Skeleton className="size-full" />
                      </AvatarFallback>
                    </Avatar>
                    <div className="absolute inset-0 z-0 animate-pulse rounded-full ring-3 ring-primary"></div>
                  </div>
                  <span className="animate-opacity-appear">{agent.name}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Chat Messages */}
        <div className="flex grow flex-col gap-4 pl-6 pr-10 overflow-y-auto">
          {MESSAGES.map((message, i) => {
            const isLastMessage = i === MESSAGES.length - 1;

            if (message.type === "agent") {
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
            if (message.type === "user") {
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

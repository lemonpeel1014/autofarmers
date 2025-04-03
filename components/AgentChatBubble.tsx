import { ChevronRight } from "lucide-react";
import { Fragment, useMemo } from "react";
import MyTokenTable from "./toolCards/MyTokenTable";
import SwapForm from "./toolCards/SwapForm";
import SwapResult from "./toolCards/SwapResult";
import LiquidPoolTable from "./toolCards/LiquidPoolTable";
import TransactionConfirm from "./toolCards/TransactionConfirm";
import TransactionResult from "./toolCards/TransactionResult";
import AgentProfile from "./AgentProfile";
import { Agent } from "@/data/agents";
import MyPositionTable from "./toolCards/MyPositionTable";

export default function AgentChatBubble({
  id,
  agent,
  text = "",
  working = false,
  isLastMessage = false,
  toolName,
  metadata,
  onClickConfirm,
  onClickCancel,
}: {
  id: number;
  agent: Agent;
  text?: string;
  isLastMessage?: boolean;
  working?: boolean;
  toolName?: string;
  metadata?:
    | {
        [key: string]: unknown;
      }
    | undefined;
  onClickConfirm: (message?: string) => void;
  onClickCancel: () => void;
}) {
  const title = useMemo(() => {
    return `${agent.name} - ${agent.role}`;
  }, [agent]);

  return (
    <div className="flex w-full max-w-[75%] flex-row items-start gap-4 bg-transparent first:mt-5 last:mb-5">
      <AgentProfile profileImage={agent.profileImage} />
      <div className="flex w-full flex-col gap-y-1 pb-2">
        <div className="flex w-full items-center justify-between">
          <span className="flex text-sm font-bold">{title}</span>
          {!working && (
            <div className="flex flex-grow justify-end">
              <ChevronRight className="m-auto flex size-4" />
            </div>
          )}
        </div>
        {working && (
          <div className="flex w-full items-center gap-2">
            <div className="flex items-center space-x-1">
              <div className="flex space-x-1">
                {[0, 1, 2].map((index) => (
                  <div
                    key={index}
                    className="h-2 w-2 animate-bounce rounded-full bg-gray-400"
                    style={{
                      animationDelay: `${index * 0.2}s`,
                      animationDuration: "0.8s",
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
        {!working && (
          <div className="flex w-max flex-wrap items-center justify-start gap-x-1 gap-y-0.5 rounded-lg px-3 py-2 text-sm bg-muted">
            {text.split("\n").map((line, i) => (
              <Fragment key={`agent-messsage-${id}-line-${i}`}>
                {line.split(" ").map((word, j) => {
                  const key = `agent-message-${id}-line-${i}-word-${j}`;
                  return word.startsWith("@") ? (
                    <span
                      key={key}
                      className="font-semibold text-blue-500 underline"
                    >
                      {word}
                    </span>
                  ) : (
                    <span key={key}>{word}</span>
                  );
                })}
                <br />
              </Fragment>
            ))}
          </div>
        )}
        {toolName && (
          <>
            {metadata && toolName === "TokenList" && (
              <MyTokenTable metadata={metadata} />
            )}
            {metadata && toolName === "SwapForm" && (
              <SwapForm
                isLastMessage={isLastMessage}
                metadata={metadata}
                onClickConfirm={onClickConfirm}
                onClickCancel={onClickCancel}
              />
            )}
            {metadata && toolName === "SwapResult" && (
              <SwapResult metadata={metadata} />
            )}
            {metadata && toolName === "LiquidPools" && (
              <LiquidPoolTable metadata={metadata} />
            )}
            {metadata && toolName === "TransactionConfirm" && (
              <TransactionConfirm
                isLastMessage={isLastMessage}
                metadata={metadata}
                onClickConfirm={onClickConfirm}
                onClickCancel={onClickCancel}
              />
            )}
            {metadata && toolName === "TransactionResult" && (
              <TransactionResult metadata={metadata} />
            )}
            {metadata && toolName === "LiquidPoolPositions" && (
              <MyPositionTable metadata={metadata} />
            )}
          </>
        )}
      </div>
    </div>
  );
}

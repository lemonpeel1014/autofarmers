import { ChevronRight } from 'lucide-react';
import { Fragment, useMemo } from 'react';
import MyTokenTable from './toolCards/MyTokenTable';
import SwapForm from './toolCards/SwapForm';
import LiquidPoolTable from './toolCards/LiquidPoolTable';
import TransactionConfirm from './toolCards/TransactionConfirm';
import TransactionResult from './toolCards/TransactionResult';
import AgentProfile from './AgentProfile';
import { Agent } from '@/data/agents';
import MyPositionTable from './toolCards/MyPositionTable';
import { messageSchema } from '@/data/thread';
import { z } from 'zod';
import MarkdownRenderer from './MarkdownRenderer';
import SwapResult from '@/components/toolCards/SwapResult';

export default function AgentChatBubble({
  agent,
  text = '',
  working = false,
  isLastMessage = false,
  metadata,
  onClickConfirm,
  onClickCancel,
}: {
  id: number;
  agent: Agent;
  text?: string;
  isLastMessage?: boolean;
  working?: boolean;
  metadata?: z.infer<typeof messageSchema.shape.metadata>;
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
                      animationDuration: '0.8s',
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
        {!working && (
          <div className="bg-muted rounded-lg px-3 py-2 text-sm">
            <MarkdownRenderer
              className="prose prose-sm prose-a:text-primary"
              content={text}
            />
          </div>
        )}
        {metadata && (
          <>
            {metadata['balance'] && <MyTokenTable balance={metadata.balance} />}
            {metadata['SwapForm'] && (
              <SwapForm
                isLastMessage={isLastMessage}
                metadata={metadata}
                onClickConfirm={onClickConfirm}
                onClickCancel={onClickCancel}
              />
            )}
            {metadata['trade'] && <SwapResult info={metadata['trade']} />}
            {metadata['LiquidPools'] && <LiquidPoolTable metadata={metadata} />}
            {metadata['TransactionConfirm'] && (
              <TransactionConfirm
                isLastMessage={isLastMessage}
                metadata={metadata}
                onClickConfirm={onClickConfirm}
                onClickCancel={onClickCancel}
              />
            )}
            {metadata['TransactionResult'] && (
              <TransactionResult metadata={metadata} />
            )}
            {metadata['LiquidPoolPositions'] && (
              <MyPositionTable metadata={metadata} />
            )}
          </>
        )}
      </div>
    </div>
  );
}

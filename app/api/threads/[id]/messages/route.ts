import {
  AddMessageRequest,
  GetMessagesRequest,
  Message as MessageProto,
  ThreadManagerClient,
} from '@/proto/thread';
import { ChannelCredentials } from '@grpc/grpc-js';
import { NextRequest } from 'next/server';
import { isArray, omit } from 'lodash-es';
import { Message } from '@/data/thread';
import { balanceSchema } from '@/data/sendai';

export async function GET(
  _: NextRequest,
  { params }: { params: Promise<{ id: number }> },
) {
  // req.nextUrl.searchParams.get('lastMessageId');
  const { id: threadId } = await params;
  const threadManager = new ThreadManagerClient(
    process.env.NETWORK_GRPC_ADDR!,
    ChannelCredentials.createInsecure(),
  );

  const r = new GetMessagesRequest();
  r.setThreadId(threadId);
  const stream = threadManager.getMessages(r);
  const messages = [] as Message[];
  for await (const resp of stream) {
    resp.getMessagesList().forEach((message: MessageProto) => {
      const m = message.toObject();
      const toolCalls = m.toolCallsList.map((t) => {
        return {
          ...t,
          arguments: JSON.parse(t.arguments),
          result: t.result ? JSON.parse(t.result) : undefined,
        };
      });

      const record: Message = {
        ...omit(m, ['toolCallsList']),
        toolCalls,
        metadata: {},
      };

      for (const toolCall of toolCalls) {
        if (!toolCall.result || !toolCall.result.result) {
          continue;
        }

        const result = isArray(toolCall.result.result)
          ? toolCall.result.result[0]
          : toolCall.result.result;

        if (!result || result.type !== 'text') {
          continue;
        }

        const data = JSON.parse(result.text);
        if (data['status'] !== 'success') {
          console.log('toolCallName:', toolCall.name, 'error:', data);
          continue;
        }

        if (data['balance']) {
          record.metadata['balance'] = balanceSchema.parse(data['balance']);
        }
      }

      messages.push(record);
    });
  }

  return Response.json(messages);
}

export async function POST(request: NextRequest) {
  const threadManagerClient = new ThreadManagerClient(
    process.env.NETWORK_GRPC_ADDR!,
    ChannelCredentials.createInsecure(),
  );

  const { threadId, message } = await request.json();
  if (!threadId || !message) {
    return Response.json(
      { error: 'Thread ID and message are required' },
      { status: 400 },
    );
  }

  try {
    const result = await new Promise<number>((resolve, reject) => {
      const r = new AddMessageRequest();
      r.setContent(message);
      r.setThreadId(threadId);
      r.setSender('USER');

      threadManagerClient.addMessage(r, (err, value) => {
        if (err) {
          reject(err);
        } else {
          resolve(value!.getMessageId());
        }
      });
    });

    return Response.json({ messageId: result });
  } catch (error) {
    console.error('Error adding message:', error);
    return Response.json({ error: 'Failed to add message' }, { status: 500 });
  }
}

import {
  GetMessagesRequest,
  GetMessagesResponse,
  Message,
  ThreadManagerClient,
} from '@/proto/thread';
import { ChannelCredentials } from '@grpc/grpc-js';
import { NextRequest } from 'next/server';

export async function GET(
  req: NextRequest,
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
  const messages = [] as Message.AsObject[];
  for await (const resp of stream) {
    resp.getMessagesList().forEach((message: Message) => {
      messages.push(message.toObject());
    });
  }

  return Response.json(messages);
}

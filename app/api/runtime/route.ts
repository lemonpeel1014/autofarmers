import { AgentRuntimeClient } from '@/proto/runtime';
import { RunRequest } from '@/proto/runtime_pb';
import { ChannelCredentials } from '@grpc/grpc-js';
import { NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
  const agentRuntimeClient = new AgentRuntimeClient(
    '127.0.0.1:10080',
    ChannelCredentials.createInsecure(),
  );

  const { threadId, agentNames } = await request.json();
  if (!threadId || !agentNames || agentNames.length === 0) {
    return Response.json(
      { error: 'Thread ID and agent names are required' },
      { status: 400 },
    );
  }

  console.log('Thread ID:', threadId);
  console.log('Agent names:', agentNames);

  try {
    await new Promise<void>((resolve, reject) => {
      const r = new RunRequest();
      r.setThreadId(threadId);
      r.setAgentNamesList(agentNames);

      agentRuntimeClient.run(r, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });

    return Response.json({ message: 'Agents running successfully' });
  } catch (error) {
    console.error('Error adding message:', error);
    return Response.json({ error: 'Failed to add message' }, { status: 500 });
  }
}

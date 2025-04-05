import { runRequestSchema } from '@/data/api';
import {
  AgentNetworkClient,
  GetAgentRuntimeInfoRequest,
  GetAgentRuntimeInfoResponse,
} from '@/proto/network';
import { AgentRuntimeClient } from '@/proto/runtime';
import { RunRequest } from '@/proto/runtime_pb';
import { ChannelCredentials } from '@grpc/grpc-js';
import { NextRequest } from 'next/server';
import { intersectIgnoreCase } from '@/utils/intersect';

export async function POST(request: NextRequest) {
  const { threadId, agentNames } = runRequestSchema.parse(await request.json());
  const networkClient = new AgentNetworkClient(
    process.env.NETWORK_GRPC_ADDR!,
    ChannelCredentials.createInsecure(),
  );

  const runtimeInfo = await new Promise<GetAgentRuntimeInfoResponse>(
    (resolve, reject) => {
      const req = new GetAgentRuntimeInfoRequest();
      req.setNamesList(agentNames);
      networkClient.getAgentRuntimeInfo(req, (err, value) => {
        if (err) {
          reject(err);
        } else {
          resolve(value!);
        }
      });
    },
  ).then((resp) => {
    const r = resp.toObject();
    return r.agentRuntimeInfoList;
  });

  console.log('Thread ID:', threadId);
  console.log('Agent names:', agentNames);
  console.log('Runtime info:', runtimeInfo);

  try {
    await Promise.all(
      runtimeInfo.map(async ({ addr, agentNamesList: names }) => {
        const agentRuntimeClient = new AgentRuntimeClient(
          addr,
          ChannelCredentials.createInsecure(),
        );
        const targets = intersectIgnoreCase(agentNames, names);
        if (targets.length == 0) {
          return;
        }

        await new Promise<void>((resolve, reject) => {
          const r = new RunRequest();
          r.setThreadId(threadId);
          r.setAgentNamesList(targets);

          console.log('run request:', r.toObject());
          agentRuntimeClient.run(r, (err) => {
            if (err) {
              reject(err);
            } else {
              resolve();
            }
          });
        });
        agentRuntimeClient.close();
      }),
    );

    return Response.json({ message: 'Agents running successfully' });
  } catch (error) {
    console.error('Error adding message:', error);
    return Response.json({ error: 'Failed to add message' }, { status: 500 });
  }
}

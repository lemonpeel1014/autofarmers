import {NextRequest} from "next/server";
import {GetThreadRequest, Thread, ThreadManagerClient} from "@/proto/thread";
import {ChannelCredentials} from "@grpc/grpc-js";

export async function GET(req: NextRequest, {params: {id: threadId}}: { params: { id: number } }) {
  const threadManagerClient = new ThreadManagerClient(process.env.NETWORK_GRPC_ADDR!, ChannelCredentials.createInsecure());

  const thread = await new Promise<Thread>((resolve, reject) => {
    const r = new GetThreadRequest();
    r.setThreadId(threadId);
    threadManagerClient.getThread(r, (err, value) => {
      if (err) {
        reject(err);
      } else {
        resolve(value!);
      }
    });
  });

  return Response.json(thread.toObject());
}
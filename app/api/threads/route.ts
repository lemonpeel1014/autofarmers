import {CreateThreadRequest, ThreadManagerClient} from "@/proto/thread";
import {ChannelCredentials} from "@grpc/grpc-js";

export async function POST() {
  const threadManagerClient = new ThreadManagerClient(process.env.NETWORK_GRPC_ADDR!, ChannelCredentials.createInsecure());

  const threadId = await new Promise<number>((resolve, reject) => {
    const r = new CreateThreadRequest();
    threadManagerClient.createThread(r, (err, value) => {
      if (err) {
        reject(err);
      } else {
        resolve(value!.getThreadId());
      }
    });
  });

  return Response.json({ threadId });
}
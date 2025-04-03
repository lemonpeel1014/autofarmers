// GENERATED CODE -- DO NOT EDIT!

// package: runtime
// file: runtime.proto

import * as runtime_pb from "./runtime_pb";
import * as grpc from "@grpc/grpc-js";

interface IAgentRuntimeService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  run: grpc.MethodDefinition<runtime_pb.RunRequest, runtime_pb.RunResponse>;
}

export const AgentRuntimeService: IAgentRuntimeService;

export interface IAgentRuntimeServer extends grpc.UntypedServiceImplementation {
  run: grpc.handleUnaryCall<runtime_pb.RunRequest, runtime_pb.RunResponse>;
}

export class AgentRuntimeClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  run(argument: runtime_pb.RunRequest, callback: grpc.requestCallback<runtime_pb.RunResponse>): grpc.ClientUnaryCall;
  run(argument: runtime_pb.RunRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<runtime_pb.RunResponse>): grpc.ClientUnaryCall;
  run(argument: runtime_pb.RunRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<runtime_pb.RunResponse>): grpc.ClientUnaryCall;
}

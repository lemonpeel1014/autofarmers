// GENERATED CODE -- DO NOT EDIT!

// package: thread
// file: thread.proto

import * as thread_pb from "./thread_pb";
import * as grpc from "@grpc/grpc-js";

interface IThreadManagerService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  createThread: grpc.MethodDefinition<thread_pb.CreateThreadRequest, thread_pb.CreateThreadResponse>;
  getThread: grpc.MethodDefinition<thread_pb.GetThreadRequest, thread_pb.Thread>;
  addMessage: grpc.MethodDefinition<thread_pb.AddMessageRequest, thread_pb.AddMessageResponse>;
  getMessages: grpc.MethodDefinition<thread_pb.GetMessagesRequest, thread_pb.GetMessagesResponse>;
  getNumMessages: grpc.MethodDefinition<thread_pb.GetNumMessagesRequest, thread_pb.GetNumMessagesResponse>;
}

export const ThreadManagerService: IThreadManagerService;

export interface IThreadManagerServer extends grpc.UntypedServiceImplementation {
  createThread: grpc.handleUnaryCall<thread_pb.CreateThreadRequest, thread_pb.CreateThreadResponse>;
  getThread: grpc.handleUnaryCall<thread_pb.GetThreadRequest, thread_pb.Thread>;
  addMessage: grpc.handleUnaryCall<thread_pb.AddMessageRequest, thread_pb.AddMessageResponse>;
  getMessages: grpc.handleServerStreamingCall<thread_pb.GetMessagesRequest, thread_pb.GetMessagesResponse>;
  getNumMessages: grpc.handleUnaryCall<thread_pb.GetNumMessagesRequest, thread_pb.GetNumMessagesResponse>;
}

export class ThreadManagerClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  createThread(argument: thread_pb.CreateThreadRequest, callback: grpc.requestCallback<thread_pb.CreateThreadResponse>): grpc.ClientUnaryCall;
  createThread(argument: thread_pb.CreateThreadRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<thread_pb.CreateThreadResponse>): grpc.ClientUnaryCall;
  createThread(argument: thread_pb.CreateThreadRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<thread_pb.CreateThreadResponse>): grpc.ClientUnaryCall;
  getThread(argument: thread_pb.GetThreadRequest, callback: grpc.requestCallback<thread_pb.Thread>): grpc.ClientUnaryCall;
  getThread(argument: thread_pb.GetThreadRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<thread_pb.Thread>): grpc.ClientUnaryCall;
  getThread(argument: thread_pb.GetThreadRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<thread_pb.Thread>): grpc.ClientUnaryCall;
  addMessage(argument: thread_pb.AddMessageRequest, callback: grpc.requestCallback<thread_pb.AddMessageResponse>): grpc.ClientUnaryCall;
  addMessage(argument: thread_pb.AddMessageRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<thread_pb.AddMessageResponse>): grpc.ClientUnaryCall;
  addMessage(argument: thread_pb.AddMessageRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<thread_pb.AddMessageResponse>): grpc.ClientUnaryCall;
  getMessages(argument: thread_pb.GetMessagesRequest, metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientReadableStream<thread_pb.GetMessagesResponse>;
  getMessages(argument: thread_pb.GetMessagesRequest, metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientReadableStream<thread_pb.GetMessagesResponse>;
  getNumMessages(argument: thread_pb.GetNumMessagesRequest, callback: grpc.requestCallback<thread_pb.GetNumMessagesResponse>): grpc.ClientUnaryCall;
  getNumMessages(argument: thread_pb.GetNumMessagesRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<thread_pb.GetNumMessagesResponse>): grpc.ClientUnaryCall;
  getNumMessages(argument: thread_pb.GetNumMessagesRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<thread_pb.GetNumMessagesResponse>): grpc.ClientUnaryCall;
}

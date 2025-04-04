// GENERATED CODE -- DO NOT EDIT!

// package: network
// file: network.proto

import * as network_pb from "./network_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as grpc from "@grpc/grpc-js";

interface IAgentNetworkService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getAgentRuntimeInfo: grpc.MethodDefinition<network_pb.GetAgentRuntimeInfoRequest, network_pb.GetAgentRuntimeInfoResponse>;
  registerAgent: grpc.MethodDefinition<network_pb.RegisterAgentRequest, google_protobuf_empty_pb.Empty>;
  deregisterAgent: grpc.MethodDefinition<network_pb.DeregisterAgentRequest, google_protobuf_empty_pb.Empty>;
  checkLive: grpc.MethodDefinition<network_pb.CheckLiveRequest, google_protobuf_empty_pb.Empty>;
}

export const AgentNetworkService: IAgentNetworkService;

export interface IAgentNetworkServer extends grpc.UntypedServiceImplementation {
  getAgentRuntimeInfo: grpc.handleUnaryCall<network_pb.GetAgentRuntimeInfoRequest, network_pb.GetAgentRuntimeInfoResponse>;
  registerAgent: grpc.handleUnaryCall<network_pb.RegisterAgentRequest, google_protobuf_empty_pb.Empty>;
  deregisterAgent: grpc.handleUnaryCall<network_pb.DeregisterAgentRequest, google_protobuf_empty_pb.Empty>;
  checkLive: grpc.handleUnaryCall<network_pb.CheckLiveRequest, google_protobuf_empty_pb.Empty>;
}

export class AgentNetworkClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  getAgentRuntimeInfo(argument: network_pb.GetAgentRuntimeInfoRequest, callback: grpc.requestCallback<network_pb.GetAgentRuntimeInfoResponse>): grpc.ClientUnaryCall;
  getAgentRuntimeInfo(argument: network_pb.GetAgentRuntimeInfoRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<network_pb.GetAgentRuntimeInfoResponse>): grpc.ClientUnaryCall;
  getAgentRuntimeInfo(argument: network_pb.GetAgentRuntimeInfoRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<network_pb.GetAgentRuntimeInfoResponse>): grpc.ClientUnaryCall;
  registerAgent(argument: network_pb.RegisterAgentRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  registerAgent(argument: network_pb.RegisterAgentRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  registerAgent(argument: network_pb.RegisterAgentRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deregisterAgent(argument: network_pb.DeregisterAgentRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deregisterAgent(argument: network_pb.DeregisterAgentRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deregisterAgent(argument: network_pb.DeregisterAgentRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  checkLive(argument: network_pb.CheckLiveRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  checkLive(argument: network_pb.CheckLiveRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  checkLive(argument: network_pb.CheckLiveRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
}

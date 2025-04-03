// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var network_pb = require('./network_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_network_DeregisterAgentRequest(arg) {
  if (!(arg instanceof network_pb.DeregisterAgentRequest)) {
    throw new Error('Expected argument of type network.DeregisterAgentRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_network_DeregisterAgentRequest(buffer_arg) {
  return network_pb.DeregisterAgentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_network_GetAgentRuntimeInfoRequest(arg) {
  if (!(arg instanceof network_pb.GetAgentRuntimeInfoRequest)) {
    throw new Error('Expected argument of type network.GetAgentRuntimeInfoRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_network_GetAgentRuntimeInfoRequest(buffer_arg) {
  return network_pb.GetAgentRuntimeInfoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_network_GetAgentRuntimeInfoResponse(arg) {
  if (!(arg instanceof network_pb.GetAgentRuntimeInfoResponse)) {
    throw new Error('Expected argument of type network.GetAgentRuntimeInfoResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_network_GetAgentRuntimeInfoResponse(buffer_arg) {
  return network_pb.GetAgentRuntimeInfoResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_network_RegisterAgentRequest(arg) {
  if (!(arg instanceof network_pb.RegisterAgentRequest)) {
    throw new Error('Expected argument of type network.RegisterAgentRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_network_RegisterAgentRequest(buffer_arg) {
  return network_pb.RegisterAgentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var AgentNetworkService = exports.AgentNetworkService = {
  getAgentRuntimeInfo: {
    path: '/network.AgentNetwork/GetAgentRuntimeInfo',
    requestStream: false,
    responseStream: false,
    requestType: network_pb.GetAgentRuntimeInfoRequest,
    responseType: network_pb.GetAgentRuntimeInfoResponse,
    requestSerialize: serialize_network_GetAgentRuntimeInfoRequest,
    requestDeserialize: deserialize_network_GetAgentRuntimeInfoRequest,
    responseSerialize: serialize_network_GetAgentRuntimeInfoResponse,
    responseDeserialize: deserialize_network_GetAgentRuntimeInfoResponse,
  },
  registerAgent: {
    path: '/network.AgentNetwork/RegisterAgent',
    requestStream: false,
    responseStream: false,
    requestType: network_pb.RegisterAgentRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_network_RegisterAgentRequest,
    requestDeserialize: deserialize_network_RegisterAgentRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  deregisterAgent: {
    path: '/network.AgentNetwork/DeregisterAgent',
    requestStream: false,
    responseStream: false,
    requestType: network_pb.DeregisterAgentRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_network_DeregisterAgentRequest,
    requestDeserialize: deserialize_network_DeregisterAgentRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
};

exports.AgentNetworkClient = grpc.makeGenericClientConstructor(AgentNetworkService, 'AgentNetwork');

// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var runtime_pb = require('./runtime_pb.js');

function serialize_runtime_RunRequest(arg) {
  if (!(arg instanceof runtime_pb.RunRequest)) {
    throw new Error('Expected argument of type runtime.RunRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_runtime_RunRequest(buffer_arg) {
  return runtime_pb.RunRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_runtime_RunResponse(arg) {
  if (!(arg instanceof runtime_pb.RunResponse)) {
    throw new Error('Expected argument of type runtime.RunResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_runtime_RunResponse(buffer_arg) {
  return runtime_pb.RunResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var AgentRuntimeService = exports.AgentRuntimeService = {
  run: {
    path: '/runtime.AgentRuntime/Run',
    requestStream: false,
    responseStream: false,
    requestType: runtime_pb.RunRequest,
    responseType: runtime_pb.RunResponse,
    requestSerialize: serialize_runtime_RunRequest,
    requestDeserialize: deserialize_runtime_RunRequest,
    responseSerialize: serialize_runtime_RunResponse,
    responseDeserialize: deserialize_runtime_RunResponse,
  },
};

exports.AgentRuntimeClient = grpc.makeGenericClientConstructor(AgentRuntimeService, 'AgentRuntime');

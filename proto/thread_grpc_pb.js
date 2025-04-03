// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var thread_pb = require('./thread_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');

function serialize_thread_AddMessageRequest(arg) {
  if (!(arg instanceof thread_pb.AddMessageRequest)) {
    throw new Error('Expected argument of type thread.AddMessageRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_thread_AddMessageRequest(buffer_arg) {
  return thread_pb.AddMessageRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_thread_AddMessageResponse(arg) {
  if (!(arg instanceof thread_pb.AddMessageResponse)) {
    throw new Error('Expected argument of type thread.AddMessageResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_thread_AddMessageResponse(buffer_arg) {
  return thread_pb.AddMessageResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_thread_CreateThreadRequest(arg) {
  if (!(arg instanceof thread_pb.CreateThreadRequest)) {
    throw new Error('Expected argument of type thread.CreateThreadRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_thread_CreateThreadRequest(buffer_arg) {
  return thread_pb.CreateThreadRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_thread_CreateThreadResponse(arg) {
  if (!(arg instanceof thread_pb.CreateThreadResponse)) {
    throw new Error('Expected argument of type thread.CreateThreadResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_thread_CreateThreadResponse(buffer_arg) {
  return thread_pb.CreateThreadResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_thread_GetMessagesRequest(arg) {
  if (!(arg instanceof thread_pb.GetMessagesRequest)) {
    throw new Error('Expected argument of type thread.GetMessagesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_thread_GetMessagesRequest(buffer_arg) {
  return thread_pb.GetMessagesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_thread_GetMessagesResponse(arg) {
  if (!(arg instanceof thread_pb.GetMessagesResponse)) {
    throw new Error('Expected argument of type thread.GetMessagesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_thread_GetMessagesResponse(buffer_arg) {
  return thread_pb.GetMessagesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_thread_GetNumMessagesRequest(arg) {
  if (!(arg instanceof thread_pb.GetNumMessagesRequest)) {
    throw new Error('Expected argument of type thread.GetNumMessagesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_thread_GetNumMessagesRequest(buffer_arg) {
  return thread_pb.GetNumMessagesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_thread_GetNumMessagesResponse(arg) {
  if (!(arg instanceof thread_pb.GetNumMessagesResponse)) {
    throw new Error('Expected argument of type thread.GetNumMessagesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_thread_GetNumMessagesResponse(buffer_arg) {
  return thread_pb.GetNumMessagesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_thread_GetThreadRequest(arg) {
  if (!(arg instanceof thread_pb.GetThreadRequest)) {
    throw new Error('Expected argument of type thread.GetThreadRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_thread_GetThreadRequest(buffer_arg) {
  return thread_pb.GetThreadRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_thread_Thread(arg) {
  if (!(arg instanceof thread_pb.Thread)) {
    throw new Error('Expected argument of type thread.Thread');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_thread_Thread(buffer_arg) {
  return thread_pb.Thread.deserializeBinary(new Uint8Array(buffer_arg));
}


var ThreadManagerService = exports.ThreadManagerService = {
  createThread: {
    path: '/thread.ThreadManager/CreateThread',
    requestStream: false,
    responseStream: false,
    requestType: thread_pb.CreateThreadRequest,
    responseType: thread_pb.CreateThreadResponse,
    requestSerialize: serialize_thread_CreateThreadRequest,
    requestDeserialize: deserialize_thread_CreateThreadRequest,
    responseSerialize: serialize_thread_CreateThreadResponse,
    responseDeserialize: deserialize_thread_CreateThreadResponse,
  },
  getThread: {
    path: '/thread.ThreadManager/GetThread',
    requestStream: false,
    responseStream: false,
    requestType: thread_pb.GetThreadRequest,
    responseType: thread_pb.Thread,
    requestSerialize: serialize_thread_GetThreadRequest,
    requestDeserialize: deserialize_thread_GetThreadRequest,
    responseSerialize: serialize_thread_Thread,
    responseDeserialize: deserialize_thread_Thread,
  },
  addMessage: {
    path: '/thread.ThreadManager/AddMessage',
    requestStream: false,
    responseStream: false,
    requestType: thread_pb.AddMessageRequest,
    responseType: thread_pb.AddMessageResponse,
    requestSerialize: serialize_thread_AddMessageRequest,
    requestDeserialize: deserialize_thread_AddMessageRequest,
    responseSerialize: serialize_thread_AddMessageResponse,
    responseDeserialize: deserialize_thread_AddMessageResponse,
  },
  getMessages: {
    path: '/thread.ThreadManager/GetMessages',
    requestStream: false,
    responseStream: true,
    requestType: thread_pb.GetMessagesRequest,
    responseType: thread_pb.GetMessagesResponse,
    requestSerialize: serialize_thread_GetMessagesRequest,
    requestDeserialize: deserialize_thread_GetMessagesRequest,
    responseSerialize: serialize_thread_GetMessagesResponse,
    responseDeserialize: deserialize_thread_GetMessagesResponse,
  },
  getNumMessages: {
    path: '/thread.ThreadManager/GetNumMessages',
    requestStream: false,
    responseStream: false,
    requestType: thread_pb.GetNumMessagesRequest,
    responseType: thread_pb.GetNumMessagesResponse,
    requestSerialize: serialize_thread_GetNumMessagesRequest,
    requestDeserialize: deserialize_thread_GetNumMessagesRequest,
    responseSerialize: serialize_thread_GetNumMessagesResponse,
    responseDeserialize: deserialize_thread_GetNumMessagesResponse,
  },
};

exports.ThreadManagerClient = grpc.makeGenericClientConstructor(ThreadManagerService, 'ThreadManager');

// package: thread
// file: thread.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class GetNumMessagesRequest extends jspb.Message {
  getThreadId(): number;
  setThreadId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetNumMessagesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetNumMessagesRequest): GetNumMessagesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetNumMessagesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetNumMessagesRequest;
  static deserializeBinaryFromReader(message: GetNumMessagesRequest, reader: jspb.BinaryReader): GetNumMessagesRequest;
}

export namespace GetNumMessagesRequest {
  export type AsObject = {
    threadId: number,
  }
}

export class GetNumMessagesResponse extends jspb.Message {
  getNumMessages(): number;
  setNumMessages(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetNumMessagesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetNumMessagesResponse): GetNumMessagesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetNumMessagesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetNumMessagesResponse;
  static deserializeBinaryFromReader(message: GetNumMessagesResponse, reader: jspb.BinaryReader): GetNumMessagesResponse;
}

export namespace GetNumMessagesResponse {
  export type AsObject = {
    numMessages: number,
  }
}

export class GetMessagesRequest extends jspb.Message {
  getThreadId(): number;
  setThreadId(value: number): void;

  getOrder(): GetMessagesRequest.OrderMap[keyof GetMessagesRequest.OrderMap];
  setOrder(value: GetMessagesRequest.OrderMap[keyof GetMessagesRequest.OrderMap]): void;

  getLimit(): number;
  setLimit(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMessagesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetMessagesRequest): GetMessagesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetMessagesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMessagesRequest;
  static deserializeBinaryFromReader(message: GetMessagesRequest, reader: jspb.BinaryReader): GetMessagesRequest;
}

export namespace GetMessagesRequest {
  export type AsObject = {
    threadId: number,
    order: GetMessagesRequest.OrderMap[keyof GetMessagesRequest.OrderMap],
    limit: number,
  }

  export interface OrderMap {
    OLDEST: 0;
    LATEST: 1;
  }

  export const Order: OrderMap;
}

export class GetMessagesResponse extends jspb.Message {
  clearMessagesList(): void;
  getMessagesList(): Array<Message>;
  setMessagesList(value: Array<Message>): void;
  addMessages(value?: Message, index?: number): Message;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMessagesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetMessagesResponse): GetMessagesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetMessagesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMessagesResponse;
  static deserializeBinaryFromReader(message: GetMessagesResponse, reader: jspb.BinaryReader): GetMessagesResponse;
}

export namespace GetMessagesResponse {
  export type AsObject = {
    messagesList: Array<Message.AsObject>,
  }
}

export class Message extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getContent(): string;
  setContent(value: string): void;

  hasCreatedAt(): boolean;
  clearCreatedAt(): void;
  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasUpdatedAt(): boolean;
  clearUpdatedAt(): void;
  getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getSender(): string;
  setSender(value: string): void;

  clearToolCallsList(): void;
  getToolCallsList(): Array<Message.ToolCall>;
  setToolCallsList(value: Array<Message.ToolCall>): void;
  addToolCalls(value?: Message.ToolCall, index?: number): Message.ToolCall;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Message.AsObject;
  static toObject(includeInstance: boolean, msg: Message): Message.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Message, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Message;
  static deserializeBinaryFromReader(message: Message, reader: jspb.BinaryReader): Message;
}

export namespace Message {
  export type AsObject = {
    id: number,
    content: string,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    sender: string,
    toolCallsList: Array<Message.ToolCall.AsObject>,
  }

  export class ToolCall extends jspb.Message {
    getName(): string;
    setName(value: string): void;

    getArguments(): string;
    setArguments(value: string): void;

    getResult(): string;
    setResult(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ToolCall.AsObject;
    static toObject(includeInstance: boolean, msg: ToolCall): ToolCall.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ToolCall, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ToolCall;
    static deserializeBinaryFromReader(message: ToolCall, reader: jspb.BinaryReader): ToolCall;
  }

  export namespace ToolCall {
    export type AsObject = {
      name: string,
      arguments: string,
      result: string,
    }
  }
}

export class AddMessageRequest extends jspb.Message {
  getThreadId(): number;
  setThreadId(value: number): void;

  getSender(): string;
  setSender(value: string): void;

  getContent(): string;
  setContent(value: string): void;

  clearToolCallsList(): void;
  getToolCallsList(): Array<Message.ToolCall>;
  setToolCallsList(value: Array<Message.ToolCall>): void;
  addToolCalls(value?: Message.ToolCall, index?: number): Message.ToolCall;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddMessageRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddMessageRequest): AddMessageRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddMessageRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddMessageRequest;
  static deserializeBinaryFromReader(message: AddMessageRequest, reader: jspb.BinaryReader): AddMessageRequest;
}

export namespace AddMessageRequest {
  export type AsObject = {
    threadId: number,
    sender: string,
    content: string,
    toolCallsList: Array<Message.ToolCall.AsObject>,
  }
}

export class AddMessageResponse extends jspb.Message {
  getMessageId(): number;
  setMessageId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddMessageResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AddMessageResponse): AddMessageResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddMessageResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddMessageResponse;
  static deserializeBinaryFromReader(message: AddMessageResponse, reader: jspb.BinaryReader): AddMessageResponse;
}

export namespace AddMessageResponse {
  export type AsObject = {
    messageId: number,
  }
}

export class CreateThreadRequest extends jspb.Message {
  getInstruction(): string;
  setInstruction(value: string): void;

  getMetadataMap(): jspb.Map<string, string>;
  clearMetadataMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateThreadRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateThreadRequest): CreateThreadRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateThreadRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateThreadRequest;
  static deserializeBinaryFromReader(message: CreateThreadRequest, reader: jspb.BinaryReader): CreateThreadRequest;
}

export namespace CreateThreadRequest {
  export type AsObject = {
    instruction: string,
    metadataMap: Array<[string, string]>,
  }
}

export class CreateThreadResponse extends jspb.Message {
  getThreadId(): number;
  setThreadId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateThreadResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateThreadResponse): CreateThreadResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateThreadResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateThreadResponse;
  static deserializeBinaryFromReader(message: CreateThreadResponse, reader: jspb.BinaryReader): CreateThreadResponse;
}

export namespace CreateThreadResponse {
  export type AsObject = {
    threadId: number,
  }
}

export class GetThreadRequest extends jspb.Message {
  getThreadId(): number;
  setThreadId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetThreadRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetThreadRequest): GetThreadRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetThreadRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetThreadRequest;
  static deserializeBinaryFromReader(message: GetThreadRequest, reader: jspb.BinaryReader): GetThreadRequest;
}

export namespace GetThreadRequest {
  export type AsObject = {
    threadId: number,
  }
}

export class Thread extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  hasCreatedAt(): boolean;
  clearCreatedAt(): void;
  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasUpdatedAt(): boolean;
  clearUpdatedAt(): void;
  getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getInstruction(): string;
  setInstruction(value: string): void;

  clearParticipantsList(): void;
  getParticipantsList(): Array<string>;
  setParticipantsList(value: Array<string>): void;
  addParticipants(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Thread.AsObject;
  static toObject(includeInstance: boolean, msg: Thread): Thread.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Thread, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Thread;
  static deserializeBinaryFromReader(message: Thread, reader: jspb.BinaryReader): Thread;
}

export namespace Thread {
  export type AsObject = {
    id: number,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    instruction: string,
    participantsList: Array<string>,
  }
}


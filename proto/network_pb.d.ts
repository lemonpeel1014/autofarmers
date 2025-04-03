// package: network
// file: network.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

export class DeregisterAgentRequest extends jspb.Message {
  clearNamesList(): void;
  getNamesList(): Array<string>;
  setNamesList(value: Array<string>): void;
  addNames(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeregisterAgentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeregisterAgentRequest): DeregisterAgentRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeregisterAgentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeregisterAgentRequest;
  static deserializeBinaryFromReader(message: DeregisterAgentRequest, reader: jspb.BinaryReader): DeregisterAgentRequest;
}

export namespace DeregisterAgentRequest {
  export type AsObject = {
    namesList: Array<string>,
  }
}

export class RegisterAgentRequest extends jspb.Message {
  getAddr(): string;
  setAddr(value: string): void;

  getSecure(): boolean;
  setSecure(value: boolean): void;

  clearNamesList(): void;
  getNamesList(): Array<string>;
  setNamesList(value: Array<string>): void;
  addNames(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegisterAgentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RegisterAgentRequest): RegisterAgentRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RegisterAgentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegisterAgentRequest;
  static deserializeBinaryFromReader(message: RegisterAgentRequest, reader: jspb.BinaryReader): RegisterAgentRequest;
}

export namespace RegisterAgentRequest {
  export type AsObject = {
    addr: string,
    secure: boolean,
    namesList: Array<string>,
  }
}

export class GetAgentRuntimeInfoRequest extends jspb.Message {
  clearNamesList(): void;
  getNamesList(): Array<string>;
  setNamesList(value: Array<string>): void;
  addNames(value: string, index?: number): string;

  hasAll(): boolean;
  clearAll(): void;
  getAll(): boolean;
  setAll(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAgentRuntimeInfoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAgentRuntimeInfoRequest): GetAgentRuntimeInfoRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAgentRuntimeInfoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAgentRuntimeInfoRequest;
  static deserializeBinaryFromReader(message: GetAgentRuntimeInfoRequest, reader: jspb.BinaryReader): GetAgentRuntimeInfoRequest;
}

export namespace GetAgentRuntimeInfoRequest {
  export type AsObject = {
    namesList: Array<string>,
    all: boolean,
  }
}

export class GetAgentRuntimeInfoResponse extends jspb.Message {
  clearAgentRuntimeInfoList(): void;
  getAgentRuntimeInfoList(): Array<AgentRuntimeInfo>;
  setAgentRuntimeInfoList(value: Array<AgentRuntimeInfo>): void;
  addAgentRuntimeInfo(value?: AgentRuntimeInfo, index?: number): AgentRuntimeInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAgentRuntimeInfoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAgentRuntimeInfoResponse): GetAgentRuntimeInfoResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAgentRuntimeInfoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAgentRuntimeInfoResponse;
  static deserializeBinaryFromReader(message: GetAgentRuntimeInfoResponse, reader: jspb.BinaryReader): GetAgentRuntimeInfoResponse;
}

export namespace GetAgentRuntimeInfoResponse {
  export type AsObject = {
    agentRuntimeInfoList: Array<AgentRuntimeInfo.AsObject>,
  }
}

export class AgentRuntimeInfo extends jspb.Message {
  getAddr(): string;
  setAddr(value: string): void;

  getSecure(): boolean;
  setSecure(value: boolean): void;

  clearAgentNamesList(): void;
  getAgentNamesList(): Array<string>;
  setAgentNamesList(value: Array<string>): void;
  addAgentNames(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AgentRuntimeInfo.AsObject;
  static toObject(includeInstance: boolean, msg: AgentRuntimeInfo): AgentRuntimeInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AgentRuntimeInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AgentRuntimeInfo;
  static deserializeBinaryFromReader(message: AgentRuntimeInfo, reader: jspb.BinaryReader): AgentRuntimeInfo;
}

export namespace AgentRuntimeInfo {
  export type AsObject = {
    addr: string,
    secure: boolean,
    agentNamesList: Array<string>,
  }
}


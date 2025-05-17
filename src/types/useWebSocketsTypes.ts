/* eslint-disable @typescript-eslint/no-explicit-any */
export type WebSocketEventType =
  | "connect"
  | "disconnect"
  | "message"
  | "error"
  | "channelJoin"
  | "channelLeave";

export interface WebSocketBaseEvent {
  type: WebSocketEventType;
  timestamp: number;
}

export interface WebSocketConnectEvent extends WebSocketBaseEvent {
  type: "connect";
  userId: string;
}

export interface WebSocketDisconnectEvent extends WebSocketBaseEvent {
  type: "disconnect";
  reason?: string;
}

export interface WebSocketMessageEvent extends WebSocketBaseEvent {
  type: "message";
  data: any;
  channel?: string;
}

export interface WebSocketErrorEvent extends WebSocketBaseEvent {
  type: "error";
  error: Error;
}

export interface WebSocketChannelJoinEvent extends WebSocketBaseEvent {
  type: "channelJoin";
  channel: string;
  success: boolean;
}

export interface WebSocketChannelLeaveEvent extends WebSocketBaseEvent {
  type: "channelLeave";
  channel: string;
  success: boolean;
}

export type WebSocketEvent =
  | WebSocketConnectEvent
  | WebSocketDisconnectEvent
  | WebSocketMessageEvent
  | WebSocketErrorEvent
  | WebSocketChannelJoinEvent
  | WebSocketChannelLeaveEvent;

// Type for event handlers
export type EventHandler<T extends WebSocketEvent["type"]> = (
  data: Extract<WebSocketEvent, { type: T }>
) => void;

export type EventHandlers = {
  [K in WebSocketEvent["type"]]?: EventHandler<K>;
};

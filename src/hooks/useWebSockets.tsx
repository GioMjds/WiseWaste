import { useEffect, useRef, useState, useCallback } from "react";
import {
  WebSocketConnectEvent,
  WebSocketEvent,
  EventHandler,
  EventHandlers,
  WebSocketDisconnectEvent,
  WebSocketChannelJoinEvent,
  WebSocketChannelLeaveEvent,
} from "@/types/useWebSocketsTypes";

// WebSocketService interface
export interface WebSocketService {
  connect: (userId?: string) => void;
  disconnect: () => void;
  isConnected: boolean;
  getCurrentUserId: () => string | undefined;
  send: (data: object) => boolean;
  on: <T extends WebSocketEvent["type"]>(
    eventType: T,
    handler: EventHandler<T>,
  ) => void;
  off: (eventType: WebSocketEvent["type"]) => void;
  joinChannel?: (channelName: string) => Promise<boolean>;
  leaveChannel?: (channelName: string) => Promise<boolean>;
  getConnectedChannels?: () => string[];
}

// Keep track of connection counts to handle multiple hook instances
const connectionCounts = new WeakMap<WebSocketService, number>();

/**
 * Custom Hook to manage WebSocket connections, channels, and events.
 *
 * @param wsService - Instance of WebSocketService to manage the connection
 * @param userId - User ID to connect to the WebSocket
 * @param options - Configuration options
 * @param options.autoConnect - Whether to automatically connect (default: true)
 * @param options.channels - Array of channel names to join after connection
 * @param eventHandlers - Object containing event handlers for different WebSocket events
 *
 * @returns {Object} WebSocket controls and state
 * @returns {Function} send - Function to send messages through the WebSocket
 * @returns {boolean} isConnected - Boolean indicating if the WebSocket is connected
 * @returns {Function} joinChannel - Function to join a specific channel
 * @returns {Function} leaveChannel - Function to leave a specific channel
 * @returns {string[]} connectedChannels - Array of currently connected channels
 */
/**
 * A custom React hook for managing WebSocket connections and channels.
 *
 * @param wsService - The WebSocket service instance to use for connections
 * @param userId - The user ID to authenticate the WebSocket connection
 * @param options - Configuration options for the WebSocket connection
 * @param options.autoConnect - Whether to automatically connect on hook initialization (default: true)
 * @param options.channels - List of channels to join automatically after connection (default: [])
 * @param eventHandlers - Custom event handlers for WebSocket events
 *
 * @returns An object containing:
 *   - send: Function to send data through the WebSocket connection
 *   - isConnected: Boolean indicating if the WebSocket is currently connected
 *   - joinChannel: Function to join a new channel
 *   - leaveChannel: Function to leave a channel
 *   - connectedChannels: Array of currently connected channel names
 *
 * @example
 * ```tsx
 * const {
 *   isConnected,
 *   send,
 *   joinChannel,
 *   leaveChannel,
 *   connectedChannels
 * } = useWebSockets(
 *   webSocketService,
 *   "user123",
 *   { autoConnect: true, channels: ["general"] },
 *   {
 *     message: (event) => console.log("Message received:", event.data)
 *   }
 * );
 * ```
 */
const useWebSockets = (
  wsService: WebSocketService,
  userId: string | undefined,
  options: {
    autoConnect?: boolean;
    channels?: string[];
  } = {},
  eventHandlers: EventHandlers = {},
) => {
  const { autoConnect = true, channels = [] } = options;
  const [connectedChannels, setConnectedChannels] = useState<string[]>([]);
  const userIdRef = useRef<string | undefined>(userId);
  const [isConnected, setIsConnected] = useState(wsService.isConnected);

  // Update ref when userId changes
  useEffect(() => {
    userIdRef.current = userId;
  }, [userId]);

  // Handle connection status updates
  const handleConnect = useCallback(
    (event: WebSocketConnectEvent) => {
      setIsConnected(true);
      if (eventHandlers.connect) {
        eventHandlers.connect(event);
      }
    },
    [eventHandlers],
  );

  const handleDisconnect = useCallback(
    (event: WebSocketDisconnectEvent) => {
      setIsConnected(false);
      setConnectedChannels([]);
      if (eventHandlers.disconnect) {
        eventHandlers.disconnect(event);
      }
    },
    [eventHandlers],
  );

  // Channel management
  const joinChannel = useCallback(
    async (channelName: string): Promise<boolean> => {
      if (!wsService.joinChannel || !isConnected) return false;

      try {
        const success = await wsService.joinChannel(channelName);
        if (success && !connectedChannels.includes(channelName)) {
          setConnectedChannels((prev) => [...prev, channelName]);
        }
        return success;
      } catch (error) {
        console.error(`Failed to join channel ${channelName}:`, error);
        return false;
      }
    },
    [wsService, isConnected, connectedChannels],
  );

  const leaveChannel = useCallback(
    async (channelName: string): Promise<boolean> => {
      if (!wsService.leaveChannel || !isConnected) return false;

      try {
        const success = await wsService.leaveChannel(channelName);
        if (success) {
          setConnectedChannels((prev) =>
            prev.filter((ch) => ch !== channelName),
          );
        }
        return success;
      } catch (error) {
        console.error(`Failed to leave channel ${channelName}:`, error);
        return false;
      }
    },
    [wsService, isConnected],
  );

  // Handle channel events
  const handleChannelJoin = useCallback(
    (event: WebSocketChannelJoinEvent) => {
      if (event.success && !connectedChannels.includes(event.channel)) {
        setConnectedChannels((prev) => [...prev, event.channel]);
      }
      if (eventHandlers.channelJoin) {
        eventHandlers.channelJoin(event);
      }
    },
    [eventHandlers, connectedChannels],
  );

  const handleChannelLeave = useCallback(
    (event: WebSocketChannelLeaveEvent) => {
      if (event.success) {
        setConnectedChannels((prev) =>
          prev.filter((ch) => ch !== event.channel),
        );
      }
      if (eventHandlers.channelLeave) {
        eventHandlers.channelLeave(event);
      }
    },
    [eventHandlers],
  );

  // Main effect for connection management
  useEffect(() => {
    // Skip if no userId or autoConnect is disabled
    if (!userId && autoConnect) return;

    const count = connectionCounts.get(wsService) || 0;
    connectionCounts.set(wsService, count + 1);

    // Manage connection
    if (count === 0 && autoConnect) {
      wsService.connect(userId);
    } else if (autoConnect) {
      // Reconnect if user ID changed
      if (wsService.isConnected && wsService.getCurrentUserId() !== userId) {
        wsService.disconnect();
        wsService.connect(userId);
      }
    }

    // Set up internal event handlers
    const internalHandlers: EventHandlers = {
      connect: handleConnect,
      disconnect: handleDisconnect,
      channelJoin: handleChannelJoin,
      channelLeave: handleChannelLeave,
    };

    // Register all event handlers (internal + user-provided)
    const allHandlers = { ...internalHandlers, ...eventHandlers };

    (
      Object.entries(allHandlers) as Array<
        [WebSocketEvent["type"], EventHandler<WebSocketEvent["type"]>]
      >
    ).forEach(([eventType, handler]) => {
      wsService.on(eventType, handler);
    });

    // Join initial channels if specified
    if (wsService.isConnected && channels.length > 0 && wsService.joinChannel) {
      channels.forEach((channel) => joinChannel(channel));
    }

    // Initial state synchronization
    setIsConnected(wsService.isConnected);
    if (wsService.getConnectedChannels) {
      setConnectedChannels(wsService.getConnectedChannels());
    }

    // Cleanup
    return () => {
      const newCount = (connectionCounts.get(wsService) || 1) - 1;
      connectionCounts.set(wsService, newCount);

      // Unregister all event handlers
      (Object.keys(allHandlers) as WebSocketEvent["type"][]).forEach(
        (eventType) => {
          wsService.off(eventType);
        },
      );

      // Disconnect if this is the last instance using the service
      if (newCount === 0 && wsService.isConnected) {
        wsService.disconnect();
      }
    };
  }, [
    wsService,
    userId,
    autoConnect,
    eventHandlers,
    channels,
    handleConnect,
    handleDisconnect,
    handleChannelJoin,
    handleChannelLeave,
    joinChannel,
  ]);

  // Send function with type checking
  const send = useCallback(
    (data: object, channel?: string): boolean => {
      if (!wsService.isConnected) return false;

      // If channel is specified, make sure we're connected to it
      if (channel && !connectedChannels.includes(channel)) {
        console.warn(
          `Attempting to send message to channel ${channel} that is not connected`,
        );
        return false;
      }

      // Add channel information if provided
      const messageData = channel ? { ...data, channel } : data;
      return wsService.send(messageData);
    },
    [wsService, connectedChannels],
  );

  return {
    send,
    isConnected,
    joinChannel,
    leaveChannel,
    connectedChannels,
  };
};

export default useWebSockets;

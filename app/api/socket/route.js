import { Server } from "socket.io";
import setupSocket from "@/server/socket";

export default function handler(req, res) {
  if (!res.socket.server.io) {
    const io = new Server(res.socket.server);
    res.socket.server.io = io;
    setupSocket(io); // Initialize the WebSocket server
  }
  res.end();
}

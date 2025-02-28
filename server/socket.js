import { Server } from "socket.io";
import http from "http";
import express from "express";

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000", // or your Next.js port
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  socket.on("sendMessage", (message) => {
    console.log("Message received:", message);

    // Broadcast the user's message to everyone
    io.emit("receiveMessage", message);

    // OPTIONAL: Send a "bot reply" after 1 second
    setTimeout(() => {
      const botReply = {
        text: `🤖 Bot says: "You said '${message.text}'"`,
        timestamp: Date.now(),
        userId: 999, // some fake ID for the bot
      };
      io.emit("receiveMessage", botReply);
    }, 1000);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });
});

server.listen(3001, () => {
  console.log("Socket.io server running on http://localhost:3001");
});

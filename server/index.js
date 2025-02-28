import { Server } from "socket.io";
import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

const server = app.listen(3001, () => {
  console.log("WebSocket server running on port 3001");
});

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000", // Allow frontend
    methods: ["GET", "POST"]
  }
});

io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  socket.on("sendMessage", (message) => {
    io.emit("receiveMessage", message);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });
});

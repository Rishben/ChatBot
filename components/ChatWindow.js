"use client";
import { useEffect, useState, useRef } from "react";
import io from "socket.io-client";
import MessageList from "./MessageList";
import ChatInput from "./ChatInput";

export default function ChatWindow({ currentUserId }) {
  const [messages, setMessages] = useState([]);
  const socketRef = useRef(null);

  useEffect(() => {
    // Clear local storage on initial mount
    localStorage.removeItem("chatMessages");

    // Create the socket connection if it doesn't exist yet
    if (!socketRef.current) {
      socketRef.current = io("http://localhost:3001");
    }
    
    // Remove any existing 'receiveMessage' listeners to prevent duplicates
    socketRef.current.off("receiveMessage");

    // Attach a listener for incoming messages
    socketRef.current.on("receiveMessage", (message) => {
      setMessages((prevMessages) => {
        // Update messages and save them in localStorage
        const updatedMessages = [...prevMessages, message];
        localStorage.setItem("chatMessages", JSON.stringify(updatedMessages));
        return updatedMessages;
      });
    });

    // Optionally, load messages from localStorage (should be empty on first load)
    const storedMessages = JSON.parse(localStorage.getItem("chatMessages")) || [];
    setMessages(storedMessages);

    // Cleanup: disconnect the socket on unmount
    return () => {
      if (socketRef.current) {
        socketRef.current.disconnect();
      }
    };
  }, []);

  const handleSendMessage = (messageText) => {
    if (!messageText.trim()) return;

    const newMessage = {
      text: messageText,
      timestamp: Date.now(),
      userId: currentUserId,
    };

    // Send the message to the server without updating the UI immediately
    socketRef.current.emit("sendMessage", newMessage);
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">

      <div className="flex-1 overflow-y-auto">
        <MessageList messages={messages} currentUserId={currentUserId} />
      </div>
      <ChatInput onSendMessage={handleSendMessage} />
    </div>
  );
}

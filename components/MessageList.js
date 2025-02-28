import Message from "./Message";

export default function MessageList({ messages, currentUserId }) {
  return (
    <div className="flex-1 overflow-y-auto p-4">
      {messages.map((msg, index) => (
        <Message
          key={index}
          message={msg.text}
          timestamp={msg.timestamp}
          isCurrentUser={msg.userId === currentUserId}
        />
      ))}
    </div>
  );
}

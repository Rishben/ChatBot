export default function Message({ message, timestamp, isCurrentUser }) {
    return (
      <div className={`flex ${isCurrentUser ? "justify-end" : "justify-start"} mb-4`}>
        <div className={`max-w-xs p-3 rounded-lg ${isCurrentUser ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"}`}>
          <p className="text-sm">{message}</p>
          <span className="text-xs text-gray-400 block mt-1">
            {new Date(timestamp).toLocaleTimeString()}
          </span>
        </div>
      </div>
    );
  }
  
"use client";

import ChatWindow from "@/components/ChatWindow";

export default function Page() {
  return (
    <div className="h-screen flex flex-col">
      {/* Header */}
      <header className="bg-blue-600 text-white text-center py-4 text-2xl font-bold">
        Real-Time Chat App 💬
      </header>

      {/* Chat Window */}
      <ChatWindow currentUserId={1} />
    </div>
  );
}

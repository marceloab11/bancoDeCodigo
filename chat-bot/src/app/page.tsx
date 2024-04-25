"use client"

import { Chat } from "@/components/chat"
import { ChatProvider } from "@/contexts/chat-context"
import { UserProvider } from "@/contexts/name-context"

const Page = () => {
  return(
    <div className="w-full h-screen bg-black text-white">
        <div className="container mx-auto max-w-lg px-2">
            <UserProvider>
              <ChatProvider>
                <h1>Chat Simples</h1>

                <Chat />
              </ChatProvider>
            </UserProvider>
        </div>
    </div>
  )
}

export default Page

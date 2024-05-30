import { nameContext } from "@/contexts/name-context"
import { useContext } from "react"
import { NameInput } from "./name-input";
import { ChatInput } from "./chat-input";
import { ChatMenssage } from "./chat-message";

export const Chat = () => {
    const nameCtx = useContext(nameContext)

    if(!nameCtx) return null;
    if(!nameCtx.user) return <NameInput />

    return(
        <div className="border border-white/30 rounded-md">
           <div className="h-96 p-3 overflow-y-scroll">
                <ChatMenssage />
           </div>
           <div className="border-t border-t-white/30 p3">
                <ChatInput name={nameCtx.user} />
           </div>
           <div className="border-t border-t-white/30 p3">
                <ChatInput name="Bot"/>
           </div>
        </div>
    )
}
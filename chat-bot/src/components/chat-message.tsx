import { ChatContext } from "@/contexts/chat-context"
import { nameContext } from "@/contexts/name-context"
import { useContext } from "react"

export const ChatMenssage = () => {
    const ChatCtx = useContext(ChatContext)
    const NameCtx = useContext(nameContext)
    return(
        <div className="flex flex-col gap-1">
            {ChatCtx?.chat.map(item => (
                <div 
                    key={item.id}
                    className={`border border-white/20 rounded-md p-2 text-sm
                        ${item.user === NameCtx?.user ?
                            "self-end bg-white/10 text-right" :
                            "self-start bg-white/5 text-left"
                        }
                    `}

                >
                    <div className="font-bolt">{item.user}</div>
                    <p>{item.text}</p>
                </div>
            ))}
        </div>
    )
}
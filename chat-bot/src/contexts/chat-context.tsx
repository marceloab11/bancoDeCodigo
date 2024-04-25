import { ChatReducer } from "@/reducers/chat-reducer";
import { Message } from "@/types/type-chatList";
import { ReactNode, createContext, useReducer } from "react";

type ChatContext = {
    chat:Message[]
    addMessage: (user:string, text:string) => void;
}

export const ChatContext = createContext<ChatContext | null>(null)

export const ChatProvider = ({children}:{children:ReactNode}) => {
    const [chat, dispatch] = useReducer(ChatReducer, []);
    function addMessage(user:string, text:string) {
        if(user && text) {
            dispatch({
                type:'add',
                payload: {
                    user,
                    text
                }
            })
        }
    }
    return(
        <ChatContext.Provider value={{chat, addMessage}}>
            {children}
        </ChatContext.Provider>
    )
}
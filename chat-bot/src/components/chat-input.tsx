import { ChatContext } from "@/contexts/chat-context";
import { useContext, useState } from "react";

type Props = {
    name:string;
}

export const ChatInput = ({name}:Props) => {
    const [inputValue, setInputValue] = useState('')
    const ChatCtx = useContext(ChatContext)

    function handleEnter(event: KeyboardEvent<HTMLInputElement>) {
        if(event.code.toLocaleLowerCase() === 'enter') {
            if(inputValue.trim() !== '') {
                ChatCtx?.addMessage(name, inputValue.trim())
                setInputValue("")
            }
        }
    }
    return(
        <input
         type="text"
         className="w-full bg-transparent text-white text-md outline-none p-1"
         placeholder={`${name} digite uma mensagem e aperte enter`}
         value={inputValue}
         onChange={e => setInputValue(e.target.value)}
         onKeyUp={handleEnter}
         />
    )
    
}
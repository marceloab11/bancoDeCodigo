import { nameContext } from "@/contexts/name-context"
import { useContext, useState } from "react"

export const NameInput = () => {
    const nameCtx = useContext(nameContext)
    const [ nameInput, setNameInput] = useState('')

    const handleKeyEnter = (event: KeyboardEvent<HTMLInputElement>) => {
        if(event.code.toLowerCase() === 'enter') {
            if(nameInput.trim() !== '' && nameInput !== 'bot' ) {
                nameCtx?.setUser(nameInput.trim())
            }
        }
    }
    return(
        <div className="mt-14">
            <p className="text-xl mb-4">Qual seu nome?</p>
            <div className="flex gap-3 items-center text-lg">
                <input
                     type="text"
                     className="flex-1 border border-white/30 rounded-md px-4 py-3 text-white bg-white/10 outline-none"
                     value={nameInput}
                     onChange={e => setNameInput(e.target.value)}
                     onKeyUp={handleKeyEnter}
                     />
            </div>
        </div>
    )
}
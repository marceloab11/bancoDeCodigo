import { ReactNode, useContext } from "react"
import { ThemeContext } from "../contexts/theme-contexts"

export const Container = ({children}:{children:ReactNode}) => {
    const themeCtx = useContext(ThemeContext)
    return(
        <div
            className={`w-full h-screen
                ${themeCtx?.theme === 'dark' ?
                    'bg-black text-white':
                     'bg-white text-black'}    
            `}
        >
            <div className="container mx-auto">
                Tema: {themeCtx?.theme}
                {children}
            </div>
        </div>
    )
}
import { useContext } from "react";
import { ThemeContext } from "../contexts/theme-contexts";

type Props = {
    label:string;
    onClick: () => void;
}

export const Button = ({label, onClick}: Props) => {
    const themeCtx = useContext(ThemeContext)
    return(
        <button
            className={`border px-4 py-3 rounded-md
                ${themeCtx?.theme === 'dark' ?
                    'bg-white text-black' :
                    'bg-black text-white' 
                }
            `}
            onClick={onClick}
        >
            {label}
        </button>
    )
}
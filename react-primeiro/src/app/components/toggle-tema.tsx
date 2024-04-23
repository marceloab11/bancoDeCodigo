import { useContext } from "react"
import { ThemeContext } from "../contexts/theme-contexts"

export const ThemaToggle = () => {
    const themeCtx = useContext(ThemeContext)
    function handleThemeToggle() {
        if(themeCtx) {
            themeCtx.setTheme(themeCtx.theme === 'dark' ? 'Light' : 'dark');
        }
     }
    return (
        <div
            className={`fixed top-0 left-0 right-0 p-3 text-center cursor-pointer`}
            onClick={handleThemeToggle}
        >
            {themeCtx?.theme === 'dark' && 'Mudar para Light' }
            {themeCtx?.theme === 'Light' && 'Mudar para Dark' }
        </div>
    )
}
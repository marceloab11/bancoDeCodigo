import { Children, ReactNode, createContext, useContext, useEffect, useState } from "react";

// Define a chave usada para armazenar o tema no armazenamento local do navegador
const STORAGE_KEY = 'themeContextKey';

// Define o tipo de objeto que será armazenado no contexto do tema
type ThemeContext = {
    theme:string;
    setTheme: (newTheme:string) => void;
}

// Cria e exporta um contexto de tema inicializado com 'null'
export const ThemeContext = createContext<ThemeContext | null>(null);

// Componente que fornece o contexto de tema aos seus componentes filhos
export const ThemeProvider = ({children}:{children: ReactNode}) => {
   
   // Define o estado do tema, inicialmente tentando obter do armazenamento local ou definindo como 'Light'
   const [theme, setTheme] = useState(
    localStorage.getItem(STORAGE_KEY) || 'Light'
   );

   // Efeito para armazenar o tema atual no armazenamento local sempre que ele for alterado
   useEffect(() => {
    localStorage.setItem(
        STORAGE_KEY, theme
    )
   }, [theme]);

   // Retorna o provedor de contexto de tema envolvendo os componentes filhos
    return(
       <ThemeContext.Provider value={{theme, setTheme}}>
            {children}
       </ThemeContext.Provider>
    )
}

export const useTheme = () => useContext(ThemeContext)
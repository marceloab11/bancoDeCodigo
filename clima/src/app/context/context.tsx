import { ReactNode, createContext, useState } from "react";

type TypeCity = {
    city: string;
    setCity: (newCity:string) => void;
}

export const cityContext = createContext<TypeCity | null>(null)

export const cityProvider = ({children}:{children:ReactNode}) => {
    const [city, setCity] = useState('')
    return(
        <cityContext.Provider value={{  city, setCity  }}>
            {children}
        </cityContext.Provider>
    )

    
}
import { ReactNode, createContext, useState } from "react";

type TypeName = {
    user: string;
    setUser: (newUser:string) => void;
}

export const nameContext = createContext<TypeName | null>(null)

export const UserProvider = ({children}:{children:ReactNode}) => {
    const [user, setUser] = useState('')
    return(
        <nameContext.Provider value={{  user, setUser  }}>
            {children}
        </nameContext.Provider>
    )

    
}
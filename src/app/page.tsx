"use client"

import { useState } from "react";
import { Form } from "./components/form";

const Page = () => {
  const [validado, setValidado] = useState(false)

  return(
    <div 
    className="w-full h-screen bg-cover bg-center flex justify-center items-center"
    style={{ backgroundImage: "url('img/teste.jpg')" }}
  > 
        {!validado ? (
                <Form onSucess={() => setValidado(true)} />
            ) : (
                <div className="text-white text-3xl">Formulário enviado com sucesso!</div>
            )}
    </div>
  )
}

export default Page;
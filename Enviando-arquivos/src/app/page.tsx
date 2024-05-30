"use client"

import { useRef, useState } from "react";

const Page = () => {
  const [legendInput, setLegendInput] = useState('')
  //Hook que controla o input file
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSend = async() => {
     if(fileInputRef.current?.files && fileInputRef.current.files.length > 0) {
        const fileItem = fileInputRef.current.files[0];
        const fileTypes = ['image/jpg', 'image/jpeg', 'image/png']

        if(fileTypes.includes(fileItem.type)) {
          const data = new FormData();
          data.append('image',fileItem);
          data.append('legend',legendInput)


          const res = await fetch('https://jsonplaceholder.typicode.com/photos', {
            method:'POST',
            headers: {
              //multipart/form-data é o tipo que aceita arquivos
              'Content-type': 'multipart/form-data'
            },
            body: data
          })
          const json = await res.json();
          console.log(json);
        
        } else {
          alert('arquivo incompativel')
        }

     } else {
        alert('Escolha um arquivo')
     }
  }

  return(
    <div className="w-full h-screen bg-black text-white">
      <h1 className="text-3xl">Upload de Imagem</h1>
      
      <div className="max-w-md flex flex-col gap-3 border border-dotted border-white p-3 mt-4">
        <input
          ref={fileInputRef}
          type="file" />
        <input
           type="text"
           placeholder="Digite uma legenda"
           value={legendInput}
           onChange={e => setLegendInput(e.target.value)}
           className="p-3 bg-white rounded-md text-black"
           />
        <button onClick={handleFileSend}>Enviar Imagem</button>
      </div>
    </div>
  )
}

export default Page;
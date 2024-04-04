"use client"

import { useState } from "react"
import { PhotoItem } from "./components/Photo-item"
import { photoList } from "./data/photo-list"
import { Modal } from "./components/modal"

const Page = () => {
  const [showModal, setShowmodal] = useState(false)
  const [imgOfModal, setImgOFMOdal] = useState("")

  function openModal(id:number) {
      const photo = photoList.find(item => item.id === id);
      if(photo) {
        setImgOFMOdal(photo.url)
        setShowmodal(true)
      }
      
  }

  function closeModal() {
    setShowmodal(false)
  }

  return(
    <div className="w-screen h-screen mx-2">
      <h1 className="text-center text-3xl font-bold my-10">Fotos intergalaticos</h1>
      
      <section className="container max-w-5x mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {photoList.map(item => 
              <PhotoItem key={item.id}
               photo={item}
                onClick={()=>openModal(item.id)}/>
            )}
      </section>
      {showModal &&
        <Modal image={imgOfModal} closeModal={closeModal}/>
      }
    </div>
  )
}

export default Page

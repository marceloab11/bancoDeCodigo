"use client"

import { Input } from "@/components/input";
import { TypeInput } from "@/types/type-form";
import { error } from "console";
import { SubmitHandler, useForm } from "react-hook-form";
  const Page = () => {
    const { 
            control,  
            handleSubmit,
            setValue,
        } = useForm<TypeInput>()

  const handleFormSubmit: SubmitHandler<TypeInput> = (data) => {
    console.log(data)
  }

  return(
      <div className="w-full h-screen bg-black text-white">
        <form onSubmit={handleSubmit(handleFormSubmit)} className="flex flex-col">
          <Input
              control={control}
              name="name"
              rules={{required:true, minLength:4, maxLength:30}}
          />
     
        <Input
              control={control}
              name="lastName"
              rules={{required:true, minLength:4, maxLength:30}}
          />

          <Input
              control={control}
              name="age"
              rules={{required:true, min:18}}
          />
            <input type="submit" value="Enviar" className="cursor-pointer w-20 border border-red-700"/>
            <button onClick={() => setValue("age",18)}>maior idade</button>
        </form>
      </div>
  )
}

export default Page;

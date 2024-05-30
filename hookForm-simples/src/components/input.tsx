import { TypeInput } from "@/types/type-form"
import { ControllerProps, UseControllerProps, useController } from "react-hook-form"

export const Input = (props:UseControllerProps<TypeInput>) => {
    const {field, fieldState} = useController(props)
    return(
        <div className="my-3">
            <input
                {...field}
                placeholder={field.name}
                className={`border ${fieldState.invalid ? 'border-red-600' : 'border-white'} p-3 text-black`}
                type="text"
             />
             {fieldState.error?.type === 'required' && <p>Campo Obrigatorio...</p>}
             {fieldState.error?.type === 'minLength' && <p>Mais de 4 caracteres..</p>}
        </div>
    )
}
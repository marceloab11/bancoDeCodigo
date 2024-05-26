import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { string, z } from "zod"

export const Form = ({onSucess}:any) => {
    const [senha, setSenha] = useState('')

    const Validacao = z.object({
        name: string().min(4,"Nome maior que 4..."),
        sobrenome: string().min(4,"Nome maior que 4..."),
        email: string().email("digite um email..."),
        senha: z.string()
            .min(8, "A senha deve ter no mínimo 8 caracteres")
            .regex(/[a-zA-Z]/, "A senha deve conter pelo menos uma letra")
            .regex(/\d/, "A senha deve conter pelo menos um número"),
        confirmaSenha: z.string()
            }).refine(data => data.senha === data.confirmaSenha, {
                message: "As senhas devem ser iguais",
                path: ["confirmaSenha"],
    });

    const {register, handleSubmit, formState:{ errors }} = useForm({ resolver:zodResolver(Validacao)})

    const onSubmit = () => {
        console.log('Funcionou...');
        onSucess()
    }

    return(
        <form onSubmit={handleSubmit(onSubmit)} className="border-2 border-white w-3/6 h-5/6 flex flex-col p-4">
            <div className="flex">
                <div>
                    <input type="text"
                    {...register('name')}
                    className={`mr-2 flex-1 p-3 border-2 rounded-md bg-transparent text-white hover:border-white ${errors.name ? 'border-red-600' : 'border-black'}`}
                    placeholder="Digite seu nome..."
                    />
                    <p className="text-red-600">{errors.name?.message as string}</p>
                </div>

                <div>
                    <input type="text"
                    {...register('sobrenome')}
                    className={`flex-1 p-3 border-2 rounded-md bg-transparent text-white hover:border-white ${errors.sobrenome ? 'border-red-600':"border-black"}`}
                    placeholder="Digite seu sobrenome..."
                    />
                    <p className="text-red-600">{errors.sobrenome?.message as string}</p>
                </div>
            </div>

            <div>
                <input type="email"
                    {...register('email')}
                    placeholder="Digite um email..."
                    className={`w-full mt-10 p-3 bg-transparent border-2 rounded-md text-white hover:border-white ${errors.email ? 'border-red-600' : 'border-black'}`}
                />
                <p className="text-red-600">{errors.email?.message as string}</p>
            </div>

            <div className="flex mt-10">
                <div>
                    <input type="password"
                        {...register('senha')}
                        placeholder="Digite sua senha..."
                        value={senha}
                        onChange={e => setSenha(e.target.value)}
                        className={`flex-1 mr-2 p-3 bg-transparent border-2 text-white rounded-md hover:border-white ${errors.senha ? 'border-red-600' : 'border-black'}`}
                    />
                    <p className="text-red-600">{errors.senha?.message as string}</p>
                </div>

                <div>
                    <input type="password"
                    {...register('confirmaSenha')}
                    placeholder="Confirme sua senha..."
                    className={`flex-1 p-3 bg-transparent border-2 text-white rounded-md hover:border-white ${errors.confirmaSenha ? 'border-red-600' : 'border-black'}`}
                    />
                    <p className="text-red-600">{errors.confirmaSenha?.message as string}</p>
                </div>

            </div>

            <div className="mt-10 flex p-3 border-2 border-black rounded-md hover:border-white">
                <p className="text-gray-400">Insira sua data de nascimento:</p>
                <input type="date"
                className="ml-4 p-1 bg-transparent text-gray-400"
            />
            </div>

            <input type="submit" value="Cadastrar" className="mt-10 p-3 bg-transparent text-gray-200 border-2 border-black hover:border-white"/>
        </form>
    )
}
"use client"

import { useState } from "react"

type Props = {
    onSearchButton: (cpf: string) => void // função que não retorna mas enviar o CPF
}

export const SearchForm = ({onSearchButton}: Props) => {
    const [cpfInput, setCpfInput] = useState('')

    return(
        <div>
            <p>Qual seu CPF?</p>
            <input type="text" inputMode="numeric" placeholder="Digite seu CPF" className="w-full " />
            <button>Entrar</button>
        </div>
    )
}
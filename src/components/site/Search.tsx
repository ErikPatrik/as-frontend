"use client"
import { useState } from "react"
import { SearchResult } from "../../types/SearchResult"
import { SearchForm } from "./SearchForm"

 // interação com o usuário

type Props = {
    id: number
}

export const Seacrh = ({id}: Props) => {
    const [results, setResults] = useState<SearchResult>()

    const handleSearchButton = async (cpf: string) => {

    }

    return (
        <section className="bg-gray-900 p-5 rounded">
            {!results && <SearchForm onSearchButton={handleSearchButton} />}
            {/* {!results && <SearchReveal results={results} />} */}
        </section>
    )
}
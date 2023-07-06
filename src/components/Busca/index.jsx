import { useState } from 'react'
import {receitas} from '../../receitas.json'

const lista = [
    'bolo',
    'torta',
    'pão',
    'arroz'
]

function Busca() {
    const [busca, setBusca] = useState('')
    const lowerBusca = busca.toLowerCase()
    const receitasFiltradas = lista.filter((receita) => receita.toLowerCase().includes(lowerBusca))

    return (
        <div>
            <input 
                type='text' 
                value={busca} 
                onChange={(ev) => setBusca(ev.target.value)} 
            />
            <ul>
                {receitasFiltradas.map((receita) => (
                    <li key={receita}>{receita}</li>
                ))}
            </ul>
        </div>
    )
}

export default Busca
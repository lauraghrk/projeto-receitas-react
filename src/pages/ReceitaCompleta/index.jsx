import { receitas } from '../../receitas.json'
import { useParams } from 'react-router-dom'
import Receita from "../../components/Receita"

function ReceitaCompleta() {
    let {id} = useParams()
    let receita = receitas[id]
    return (
        <Receita receita={receita} />
    )
}

export default ReceitaCompleta
import { receitas } from '../../receitas.json'
import { useParams } from 'react-router-dom'
import Receita from "../../components/Receita"

function ReceitaCompleta() {
    let {id} = useParams()
    let receita = receitas[id]
    return (
        <section className='container'>
            <Receita receita={receita} />
        </section>
    )
}

export default ReceitaCompleta
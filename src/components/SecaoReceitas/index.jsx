import CardReceita from '../CardReceita'
import { receitas } from '../../receitas.json'
import './styles.css'

function SecaoReceitas() {
    return (
        <section className='secaoReceitas'>
            {receitas.map((receita) => <CardReceita receita={receita} />)}
        </section>
    )
}

export default SecaoReceitas
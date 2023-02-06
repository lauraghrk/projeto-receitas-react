import CardReceita from '../CardReceita'
import { receitas } from '../../receitas'
import './styles.css'

function SecaoReceitas() {
    return (
        <section className='secaoReceitas'>
            {receitas.map((receita) => <CardReceita receita={receita} />)}
        </section>
    )
}

export default SecaoReceitas
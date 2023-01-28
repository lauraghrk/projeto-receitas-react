import CardReceita from '../CardReceita'
import { receitas } from '../../receitas.json'
import './styles.css'

function SecaoReceitas() {
    return (
        <section className='secaoReceitas'>
            <div className="receitas">
                {receitas.map((receita) => <CardReceita receita={receita} />)}
            </div>
        </section>
    )
}

export default SecaoReceitas
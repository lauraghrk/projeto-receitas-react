import CardReceita from '../CardReceita'
import { receitas } from '../../receitas.json'
import './styles.css'

function SecaoReceitas() {
    return (
        <section className='secaoReceitas'>
            <h2 className='tituloSecao'>Destaques</h2>
            <div className="receitas">
                {receitas.map((receita) => {
                    return (
                        <CardReceita nome={receita.nome} descricao={receita.descricao} imagem={receita.imagem} />
                    )
                })}
            </div>
        </section>
    )
}

export default SecaoReceitas
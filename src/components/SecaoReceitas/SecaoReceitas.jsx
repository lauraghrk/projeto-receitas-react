import CardReceita from '../CardReceita/CardReceita'
import { receitas } from '../../receitas.json'

function SecaoReceitas() {
    return (
        <section className="receitas">
            {receitas.map((receita) => {
                return (
                    <CardReceita nome={receita.nome} descricao={receita.descricao} imagem={receita.imagem} />
                )
            })}
        </section>
    )
}

export default SecaoReceitas
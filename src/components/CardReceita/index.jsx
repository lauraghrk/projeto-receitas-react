import { Link } from 'react-router-dom'
import './styles.css'

function CardReceita({receita}) {
    return (
        <Link to={"/receita/" + receita.id}>
            <div className="card">
                <img src={receita.imagem} alt={receita.nome} />
                <h3>{receita.nome}</h3>
                <p>{receita.descricao}</p>
            </div>
        </Link>
    )
}
export default CardReceita
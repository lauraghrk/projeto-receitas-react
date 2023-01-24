import { Link } from 'react-router-dom'
import './styles.css'

function CardReceita({nome, descricao, imagem}) {
    return (
        <div className="card">
            <img src={imagem} alt="foto da receita" />
            <h3>{nome}</h3>
            <p>{descricao}</p>
            <Link to={"/receita"}>Ver tudo</Link>
        </div>
    )
}
export default CardReceita
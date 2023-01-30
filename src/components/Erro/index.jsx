import { Link } from 'react-router-dom'
import './styles.css'

function Erro() {
    return (
        <div className='container'>
            <div className='msg-erro'>
                <h4>Ops! Essa página não existe.</h4>
                <Link to={"/"}>Retorne para a página inicial.</Link>
            </div>
        </div>
    )
}

export default Erro
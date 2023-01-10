import { Link } from 'react-router-dom'
import './styles.css'

function Header() {
    return (
        <div className="header">
            <h1>Vou Ter Que Cozinhar</h1>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/salgados'>Salgados</Link>
                <Link to='/doces'>Doces</Link>
                <Link to='/bebidas'>Bebidas</Link>
                <Link to='/tabela'>Tabela de medidas</Link>
                <Link to='/sobre'>Sobre</Link>
            </nav>
        </div>
    )
}

export default Header
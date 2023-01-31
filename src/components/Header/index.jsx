import { Link } from 'react-router-dom'
import './styles.css'

function Header() {
    return (
        <header className="header">
            <h1>Vou Ter Que Cozinhar</h1>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/tabelamedidas'>Tabela de medidas</Link>
                <Link to='/sobre'>Sobre</Link>
            </nav>
        </header>
    )
}

export default Header
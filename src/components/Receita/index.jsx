import './styles.css'

function Receita({receita}) {
    return (
        <section className="container">
            <h3>{receita.nome}</h3>
            <p>{receita.ingredientes}</p>
        </section>
    )
}

export default Receita
import './styles.css'

function Receita({receita}) {
    return (
        <section className="container">
            <main className='receita'>
                <h3>{receita.nome}</h3>
                <h4>Ingredientes:</h4>
                <ul>
                    {receita.ingredientes.map((ingrediente) => <li>{ingrediente}</li>)}
                </ul>
                <h4>Modo de preparo:</h4>
                <ul>
                    {receita.preparo.map((etapa) => <li>{etapa}</li>)}
                </ul>
                <img src={receita.imagem} alt={receita.nome} />
            </main>
        </section>
    )
}

export default Receita
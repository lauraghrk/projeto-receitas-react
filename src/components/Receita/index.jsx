import './styles.css'

function Receita({receita}) {
    return (
        <main className='receita'>
            <h3>{receita.nome}</h3>
            <h4>Ingredientes:</h4>
            <ul className='ingredientes'>
                {receita.ingredientes.map((ingrediente) => <li>{ingrediente}</li>)}
            </ul>
            <h4>Modo de preparo:</h4>
            <ul className='preparo'>
                {receita.preparo.map((etapa) => <li>{etapa}</li>)}
            </ul>
            <img src={receita.imagem} alt={receita.nome} />
        </main>
    )
}

export default Receita
import './style.css'

function Sobre() {
    return (
        <section className='container'>
            <h2>Sobre o site:</h2>
            <p>
                O site Vou Ter Que Cozinhar está sendo construído em React como forma de estudo sobre o desenvolvimento de single page applications e para compor meu portfólio como desenvolvedora de sistemas.
            </p>
            <p>
                E juntando a fome com a vontade de cozinhar, pretendo utilizar o site como repositório das minhas receitas favoritas, e quem sabe compartilhá-las com os amigos diretamente do site.
            </p>
            <p>
                As imagens utilizadas são apenas ilustrativas e não são de minha autoria, todas foram retiradas do site <a href='https://br.freepik.com/' className='link-sobre'>Freepik</a>. 
            </p>
            <p>
                Você pode me encontrar pelo meu perfil no <a href='https://www.linkedin.com/in/laura-gehrke-78640b16b/' className='link-sobre'>LinkedIn</a>.
            </p>
        </section>
    )
}

export default Sobre
export default function Home() {
    return (
        <body>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="icon" href="image/spotify amarelo.png" />
            <title>Unispot</title>
            <header>
                <div className="logo">
                    <img className="logo-icon" src="/spotify amarelo.png" alt="" />
                </div>
                <nav>
                    <ul>
                        <li>
                            <a href="#">Pesquisar</a>
                        </li>
                        <li>
                            <a href="suporte.html">Suporte</a>
                        </li>
                    </ul>
                    <div className="barra">|</div>
                    <ul>
                        <li>
                            <a href="login.html">Login</a>
                        </li>
                        <li>
                            <a href="cadastro.html">Cadastrar</a>
                        </li>
                    </ul>
                </nav>
            </header>
            <main>
                <img src="/img1.png" alt="Image 1" className="image" />
            </main>
        </body>
    )
}

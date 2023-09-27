import Link from 'next/link'

export default function Navbar() {
    return (
        <header>
            <Link href="/">
                <div className="logo">
                    <img className="logo-icon" src="/spotify amarelo.png" alt="" />
                </div>
            </Link>
            <nav>
                <ul>
                    <li>
                        <Link href="/playlists">Playlists</Link>
                    </li>
                    <li>
                        <Link href="/suporte">Suporte</Link>
                    </li>
                </ul>
                <div className="barra">|</div>
                <ul>
                    <li>
                        <Link href="/login">Login</Link>
                    </li>
                    <li>
                        <Link href="/cadastro">Inscrever-se</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

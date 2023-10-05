import Link from 'next/link';

export default function Navbar() {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark custom-navbar">
                <div className="container-fluid">
                    <Link href="/" className="navbar-brand">
                        <img className="logo-icon" src="/spotify amarelo.png" alt="Logo" />
                    </Link>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <Link href="/playlists">
                                    <div className="nav-link">Playlists</div>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/suporte">
                                    <div className="nav-link">Suporte</div>
                                </Link>
                            </li>
                        </ul>
                        <div className="barra mx-3">|</div>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link href="/login">
                                    <div className="nav-link">Login</div>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/cadastro">
                                    <div className="nav-link">Registre-se</div>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}


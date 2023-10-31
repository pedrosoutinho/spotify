'use client';
import Link from 'next/link';
import { useContext, useState } from 'react';
import UserContext from './userContext';
import SearchBar from './searchBar.js'

export default function Navbar() {
    const { isLoggedIn, logout } = useContext(UserContext);

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
                                <Link href="/playlists" className="nav-link">
                                    Playlists
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/suporte" className="nav-link">
                                    Suporte
                                </Link>
                            </li>
                        </ul>
                        <div className="barra mx-3">|</div>
                        <ul className="navbar-nav">
                            {isLoggedIn ? (
                                <>  
                                     <li className='custom-input-searchbar'>
                                        <SearchBar/>
                                     </li>
                                    <li className="nav-item dropdown">
                                        <div className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            My Account
                                        </div>
                                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <li>
                                                <Link href="/myplaylists" className="dropdown-item">
                                                    My Playlists
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/edit-profile" className="dropdown-item">
                                                    Edit Profile
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <div className="nav-link" style={{cursor: 'pointer'}} onClick={logout}>Logout</div>
                                    </li>
                                </>
                            ) : (
                                <>
                                    <li className="nav-item">
                                        <Link href="/login" className="nav-link">
                                            Login
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link href="/cadastro" className="nav-link">
                                            Registre-se
                                        </Link>
                                    </li>
                                </>
                            )}
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}


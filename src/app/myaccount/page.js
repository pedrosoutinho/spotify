'use client'
import Link from 'next/link';
import { useContext } from 'react';
import UserContext from '../components/userContext';
import styles from './page.module.css';

export default function MyAccountPage() {
    const { isLoggedIn } = useContext(UserContext);

    if (!isLoggedIn) {
        return (
            <main className={styles.container}>
                <h1>Access Denied</h1>
                <p>You must be logged in to view this page.</p>
                <Link href="/login">
                    <div className={styles.option}>Go to Login</div>
                </Link>
            </main>
        );
    }

    return (
        <main className={styles.container}>
            <h1>My Account</h1>
            <ul className={styles.optionsList}>
                <li>
                    <Link href="/playlists">
                        <div className={styles.option}>My Playlists</div>
                    </Link>
                </li>
                <li>
                    <Link href="/editprofile">
                        <div className={styles.option}>Edit Profile</div>
                    </Link>
                </li>
            </ul>
        </main>
    );
}


// EditProfile.js
'use client'
import { useState, useEffect, useContext } from 'react';
import styles from './page.module.css';
import Swal from 'sweetalert2';
import UserContext from '../components/userContext.js';
import { updateUser } from '../services/api.js';

export default function EditProfile() {
    const { user } = useContext(UserContext);

    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');

    useEffect(() => {
        setName(user.name);
        setEmail(user.email);
    }, [user]);

    const handleUpdate = async (e) => {
        e.preventDefault();

        if (password !== passwordConfirmation) {
            Swal.fire({
                icon: 'error',
                title: 'Erro!',
                text: 'As senhas não coincidem.',
            });
            document.getElementById('passwordConfirmation').focus();
            return;
        }

        if (name === '' || email === '' || password === '') {
            Swal.fire({
                icon: 'error',
                title: 'Erro!',
                text: 'Preencha todos os campos.',
            });
            return;
        }


        try {
            const updatedUser = {
                id: user.id,
                name,
                email,
                password
            };
            await updateUser(updatedUser);
            Swal.fire({
                icon: 'success',
                title: 'Profile updated successfully!',
                showConfirmButton: false,
                timer: 2000
            });
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'There was an issue updating your profile. Please try again.',
            });
        }
    };

    return (
        <main>
            <div className={styles.cadastroStyle}>
                <div>
                    <img src="/spotify amarelo.png" alt="" className={styles.logoStyleCadastro} />
                </div>
                <h1>Atualize suas informações</h1>
                <div>
                    <form onSubmit={handleUpdate} className={styles.formStyle}>
                        <div>
                            <input
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className={styles.inputStyle}
                                type="text"
                                placeholder="Como devemos te chamar?"
                            />
                        </div>
                        <div>
                            <input
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className={styles.inputStyle}
                                type="email"
                                placeholder="E-mail"
                            />
                        </div>
                        <div>
                            <input
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className={styles.inputStyle}
                                type="password"
                                placeholder="Senha"
                            />
                        </div>
                        <div  >
                            <input
                                id="passwordConfirmation"
                                value={passwordConfirmation}
                                onChange={(e) => setPasswordConfirmation(e.target.value)}
                                className={styles.inputStyle}
                                type="password"
                                placeholder="Confirme sua senha"
                            />
                        </div>
                        <button type="submit" className={styles.botao}>
                            Finalizar
                        </button>
                    </form>
                </div>
            </div>
        </main>

    );
}
'use client'
import { useState } from 'react';
import styles from './page.module.css';
import Swal from 'sweetalert2';
import { registerUser } from '../services/api';

export default function Page() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [emailConfirmation, setEmailConfirmation] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (email !== emailConfirmation) {
            Swal.fire({
                icon: 'error',
                title: 'Erro!',
                text: 'Os e-mails não coincidem.',
            });
            document.getElementById('emailConfirmation').focus();
            return;
        }

        if (password !== passwordConfirmation) {
            Swal.fire({
                icon: 'error',
                title: 'Erro!',
                text: 'As senhas não coincidem.',
            });
            document.getElementById('passwordConfirmation').focus();
            return;
        }

        if (name === '' || email === '' || emailConfirmation === '' || password === '') {
            Swal.fire({
                icon: 'error',
                title: 'Erro!',
                text: 'Preencha todos os campos.',
            });
            return;
        }

        try {
            await registerUser({ name, email, password });
            setName('');
            setEmail('');
            setEmailConfirmation('');
            setPassword('');
            setPasswordConfirmation('');
            Swal.fire({
                icon: 'success',
                title: 'Cadastro realizado com sucesso!',
                text: 'Seja bem-vindo(a)!',
                showConfirmButton: false,
                timer: 2000
            });
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Erro!',
                text: 'Houve um problema ao realizar o cadastro. Tente novamente.',
            });
        }
    };

    return (
        <main>
            <div className={styles.cadastroStyle}>
                <div>
                    <img src="/spotify amarelo.png" alt="" className={styles.logoStyleCadastro} />
                </div>
                <h1>Registre-se</h1>
                <div>
                    <form onSubmit={handleSubmit} className={styles.formStyle}>
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
                                id="emailConfirmation"
                                value={emailConfirmation}
                                onChange={(e) => setEmailConfirmation(e.target.value)}
                                className={styles.inputStyle}
                                type="email"
                                placeholder="Confirme o seu e-mail"
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



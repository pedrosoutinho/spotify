'use client'
import { useState } from 'react';
import styles from './page.module.css';
import Swal from 'sweetalert2';

export default function Page() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [emailConfirmation, setEmailConfirmation] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
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

        if (name === '' || email === '' || emailConfirmation === '' || password === '') {
            Swal.fire({
                icon: 'error',
                title: 'Erro!',
                text: 'Preencha todos os campos.',
            });
            return;
        }

        setName('');
        setEmail('');
        setEmailConfirmation('');
        setPassword('');
        Swal.fire({
            icon: 'success',
            title: 'Cadastro realizado com sucesso!',
            title: 'Seja bem-vindo(a)!',
            showConfirmButton: false,
            timer: 2000
        });
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
                        <div className="form-group">
                            <input
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className={styles.inputStyle}
                                type="text"
                                placeholder="Como devemos te chamar?"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className={styles.inputStyle}
                                type="email"
                                placeholder="E-mail"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                id="emailConfirmation"
                                value={emailConfirmation}
                                onChange={(e) => setEmailConfirmation(e.target.value)}
                                className={styles.inputStyle}
                                type="email"
                                placeholder="Confirme o e-mail"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className={styles.inputStyle}
                                type="password"
                                placeholder="Senha"
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



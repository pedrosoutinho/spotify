'use client'
import { useContext, useState } from 'react'
import Swal from 'sweetalert2'
import styles from './page.module.css'
import { loginUser } from '../services/api'
import userContext from "../components/userContext.js";

function Page() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {login} = useContext(userContext);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (email === '' || password === '') {
            Swal.fire({
                title: 'Erro!',
                text: 'Digite seu Login e Senha',
                icon: 'error',
                confirmButtonText: 'Ok'
            });
            return;
        }

        try {
            const responseData = await loginUser({ email, password });
            if (responseData.success) {
                login(responseData.user);

                Swal.fire({
                    icon: 'success',
                    title: 'Usuário logado com sucesso',
                    showConfirmButton: false,
                    timer: 1500
                });
            } else {
                throw new Error('Invalid credentials');
            }
        } catch (error) {
            Swal.fire({
                title: 'Erro!',
                text: 'Erro ao fazer login. Por favor, tente novamente.',
                icon: 'error',
                confirmButtonText: 'Ok'
            });
        }
    };

    return (
        <main>
            <h1>Acesse a sua conta</h1>
            <div>
                <form className={styles.formStyle} onSubmit={handleSubmit}>
                    <div className={styles.formGroup}>
                        <label className={styles.labelStyle} htmlFor="exampleInputEmail1">
                            Endereço de email
                        </label>
                        <input
                            className={styles.inputStyle}
                            type="email"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Seu email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label className={styles.labelStyle} htmlFor="exampleInputPassword1">
                            Senha
                        </label>
                        <input
                            className={styles.inputStyle}
                            type="password"
                            id="exampleInputPassword1"
                            placeholder="Senha"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className={styles.formGroup + ' ' + styles.formCheck}>
                        <input type="checkbox" className={styles.formCheckInput} id="exampleCheck1" />
                        <label className={styles.formCheckLabel} htmlFor="exampleCheck1">
                            Manter minha conta conectada
                        </label>
                    </div>
                    <button type="submit" className={styles.buttonStyle}>
                        Entrar
                    </button>
                </form>
            </div>
        </main>
    );
}

export default Page;

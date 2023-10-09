'use client'
import { useState } from 'react';
import styles from './page.module.css';

export default function Page() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [emailConfirmation, setEmailConfirmation] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [showPopup, setShowPopup] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (email !== emailConfirmation) {
            setMessage('Os e-mails não coincidem.');
            setShowPopup(true);
            document.getElementById('emailConfirmation').focus();
            return;
        }

        setName('');
        setEmail('');
        setEmailConfirmation('');
        setPassword('');
        setMessage('Registro realizado com sucesso!');
        setShowPopup(true);
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
            {showPopup && (
                <div className={styles.popupOverlay}>
                    <div className={styles.popupContent}>
                        <span className={styles.closeBtn} onClick={() => setShowPopup(false)}>
                            &times;
                        </span>
                        <p>{message}</p>
                    </div>
                </div>
            )}
        </main>
    );
}



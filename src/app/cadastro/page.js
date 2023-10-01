export default function Page() {
    const cadastroStyle = {
        textAlign: 'center',
        marginTop: '-45px',
        boxShadow: '0px 0px 4px 5px rgba(0, 0, 0, 0.15)',
        padding: '14px',
        borderRadius: '7px',

    }
    const logoStyleCadastro = {
        width: '70px',
        background: 'rgba(0, 0, 0, 0.4)',
        boxShadow: '0 4px 3px rgba(0, 0, 0, 0.3)',

    }
    const formStyle = {
        textAlign: 'start',
        maxWidth: '350px',
        padding: '10px',
        borderRadius: '6px',
        boxShadow: '0px 0px 5px 2px rgba(0, 0, 0, 0.1)',
    };
    const inputStyle = {
        width: '100%',
        padding: '8px',
        marginBottom: '12px',
        borderRadius: '5px',
        border: '1px solid #ccc',
    };
    const botao = {
        display: 'block',
        margin: '4px auto 3px auto',
        padding: '10px 28px',
        color: 'rgba(0, 0, 0, 0.7)',
        background: '#ffcc00',
        border: 'rgba(0, 0, 0, 0.5) 1px solid',
        boxShadow: '-2px 3px 1px 1px rgba(0, 0, 0, 0.3)',
        borderRadius: '8px',
        fontSize: '14.5px',
        fontWeight: 'bold'
    }
    return (
        <main>
            <div style={cadastroStyle}>
                <div>
                    <img className="logo-icon" src="/spotify amarelo.png" alt="" style={logoStyleCadastro} />
                </div>
                <h1>Registre-se</h1>
                <div >

                    <form style={formStyle}>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Nome:</label>
                            <br />
                            <input
                                style={inputStyle}
                                type="email"
                                placeholder="Ex: Vinicius Lopes"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Endereço de e-mail:</label>
                            <br />
                            <input
                                style={inputStyle}
                                type="email"
                                placeholder="Ex: unifor@gmail.com"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Senha:</label>
                            <br />
                            <input
                                style={inputStyle}
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Ex: senha123"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Repita a senha:</label>
                            <input
                                style={inputStyle}
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Repita a sua senha"
                            />
                        </div>
                        <button type="submit" style={botao}>
                            Finalizar
                        </button>
                    </form>
                </div>
            </div>
        </main>
    );
}

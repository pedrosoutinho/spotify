export default function Page() {
    const formStyle = {
        maxWidth: '400px',
        margin: '0 auto',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    };

    const labelStyle = {
        display: 'block',
        marginBottom: '8px',
    };

    const inputStyle = {
        width: '100%',
        padding: '10px',
        marginBottom: '20px',
        borderRadius: '5px',
        border: '1px solid #ccc',
    };

    const buttonStyle = {
        backgroundColor: '#007BFF',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        padding: '10px 20px',
        cursor: 'pointer',
    };

    return (
        <main>
            <h1>Acesse a sua conta</h1>
            <div>
                <form style={formStyle}>
                    <div className="form-group">
                        <label style={labelStyle} htmlFor="exampleInputEmail1">
                            Endereço de email
                        </label>
                        <input
                            style={inputStyle}
                            type="email"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Seu email"
                        />
                    </div>
                    <div className="form-group">
                        <label style={labelStyle} htmlFor="exampleInputPassword1">
                            Senha
                        </label>
                        <input
                            style={inputStyle}
                            type="password"
                            id="exampleInputPassword1"
                            placeholder="Senha"
                        />
                    </div>
                    <div className="form-group form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">
                            Manter minha conta conectada
                        </label>
                    </div>
                    <button type="submit" style={buttonStyle}>
                        Entrar
                    </button>
                </form>
            </div>
        </main>
    );
}

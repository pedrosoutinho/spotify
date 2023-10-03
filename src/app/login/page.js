import React from 'react';

function Page() {
  // Estilos CSS para elementos HTML
  const formStyle = {
    // Define a largura máxima do formulário
    maxWidth: '400px',
    // Centraliza o formulário horizontalmente na página
    margin: '0 auto',
    // Adiciona um espaçamento interno ao redor do formulário
    padding: '20px',
    // Adiciona uma borda ao redor do formulário
    border: '1px solid #ccc',
    // Arredonda as bordas do formulário
    borderRadius: '5px',
    // Adiciona uma sombra suave ao redor do formulário
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
  };
  
  const labelStyle = {
    // Define o rótulo como um bloco, para que ele ocupe toda a largura disponível
    display: 'block',
    // Adiciona um espaçamento inferior para separar os rótulos dos campos de entrada
    marginBottom: '8px',
  };
  
  const inputStyle = {
    // Define a largura do campo de entrada como 100% da largura do pai
    width: '100%',
    // Adiciona preenchimento interno ao campo de entrada
    padding: '10px',
    // Adiciona um espaçamento inferior para separar os campos de entrada
    marginBottom: '20px',
    // Arredonda as bordas do campo de entrada
    borderRadius: '5px',
    // Adiciona uma borda ao redor do campo de entrada
    border: '1px solid #ccc',
  };
  
  const buttonStyle = {  //indica uma propriedade dinamica
    // Define a cor de fundo do botão
    backgroundColor: '#007BFF',
    // Define a cor do texto do botão como branco
    color: '#fff',
    // Remove a borda do botão
    border: 'none',
    // Arredonda as bordas do botão
    borderRadius: '5px',
    // Adiciona preenchimento interno ao botão
    padding: '10px 20px',
    // Define o cursor como "pointer" para indicar que é clicável
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

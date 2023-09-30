import React from 'react';

function Page() {
  const divCadastroStyle = {
    padding: '10px',
    width: '350px',
    textAlign: 'center',
    border: '2px solid red',
  };
  const formStyle = {
    maxWidth: '350px',
    textAlign:'center',
  
    borderRadius: '5px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
  };
  const inputStyle = {
    margin:'2px',
    width:'100%',
    borderRadius: '5px',
    border: '2px solid #ccc',
  };
  const botao = {
    marginTop:'7px'
  }
  return (
    <main>
      <h1>Registre-se</h1>
      <div style={divCadastroStyle}>
        
        <form style = {formStyle}>
        <div className="form-group">
            <label htmlFor="exampleInputEmail1">Nome</label>
            <br></br>
            <input
              style={inputStyle}
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Endereço de email</label>
            <br></br>
            <input
              style={inputStyle}
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Senha</label>
            <br></br>
            <input
              style={inputStyle}
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Repita a senha</label>
            <input
              style={inputStyle}
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <button type="submit" style={botao}>
            Enviar
          </button>
        </form>
      </div>
    </main>
  );
}

export default Page;

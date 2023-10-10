'use client'
import React, { useState } from 'react';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import styles from './page.module.css'

function Page() {
  // Definir estados para email e senha
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const MySwal = withReactContent(Swal)

  // Função para lidar com o envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password)

    // Validar os campos (adicionar suas próprias regras de validação)
    if (email === '' || password === '') {
      MySwal.fire({
        title: 'Erro!',
        text: 'Digite seu Login e Senha',
        icon: 'error',
        confirmButtonText: 'Ok'
      })
      return;
    }
    MySwal.fire({

      icon: 'success',
      title: 'Usuário logado com sucesso',
      showConfirmButton: false,
      timer: 1500
    })
    // Enviar os dados para a API ou realizar outras ações
    // Você pode acessar os valores de email e password aqui
    console.log('Email:', email);
    console.log('Senha:', password);
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
              value={email} // Define o valor do campo de entrada com base no estado
              onChange={(e) => setEmail(e.target.value)} // Atualiza o estado quando o campo muda
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
              value={password} // Define o valor do campo de entrada com base no estado
              onChange={(e) => setPassword(e.target.value)} // Atualiza o estado quando o campo muda
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

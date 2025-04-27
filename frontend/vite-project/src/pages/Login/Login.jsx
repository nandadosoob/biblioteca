import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

function Login() {
  return (
    <div className="login-container">
      <div className="left-panel" />
      <div className="right-panel">
        <div className="login-card">
          <div className="logo">
            <img src="/bibliotecLogoDFB.PNG" alt="Logo da Biblioteca" />
          </div>
          <h2>Entrar</h2>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Senha" />
          <button type="button">Entrar</button>
          <p>
            Não tem uma conta?{' '}
            <Link to="/CadastroUsuario" className="link-signup">
              Crie aqui
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;

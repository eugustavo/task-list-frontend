import React from 'react';
import './App.css';

import Routes from './routes';
import logo from './assets/logo.png';

function App() {
  
  function handleSubmit(){
    alert('Hello World!');
  }

  return (
    <div className="container">
      <img src={logo} alt="Task List"/>

      <div className="content">
        <p>
          Crie suas <strong>tarefas</strong> e nunca mais esqueça das coisas :D
        </p>
        
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">E-MAIL</label>
          <input 
            type="email" 
            id="email" 
            placeholder="Seu e-mail incrível"
          />

          <label htmlFor="password">PASSWORD</label>
          <input 
            type="password" 
            id="password" 
            placeholder="Sua senha incrível"
          />
          <button className="btn" type="submit">Entrar</button>
        </form>
      </div>
    </div>
  );
}

export default App;

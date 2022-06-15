import React from 'react';
import './App.css';
import logo from './logoTrybe.png';

function App() {
  return (
    <div>
      <header>
        <img src={ logo } alt="" srcSet=""/>
      </header>
      <main className="app">
      <section>
        <h2>Login</h2>
        <label htmlFor="email">
        <input type="text" id="email">Email</input>
        </label>
        <input>Senha</input>
        <button>Fazer Login</button>
      </section>
      <section>
        <h2>Register</h2>
      </section>
      </main>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import LoginForm from './components/LoginForm';
import logo from './logoTrybe.png';
import RegisterForm from './components/RegisterForm';

class App extends React.Component {
  render() {
    return (
      <div>
        <header>
          <img src={logo} alt="" srcSet="" />
        </header>
        <main className="app">
          <LoginForm />
          <RegisterForm />
        </main>
      </div>

    )
  }
}

export default App;

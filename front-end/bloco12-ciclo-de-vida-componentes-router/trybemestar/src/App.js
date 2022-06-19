import logo from './trybe-logo.png';
import React from 'react';
import './App.css';
import Timer from './components/Timer';

class App extends React.Component {
  state = {
    showTimer: true,
  }

  toggleTimer = () => {
    this.setState((prevState) => ({ showTimer: !prevState.showTimer }))
  }
  render() {
    const { showTimer } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h1>Trybem Estar</h1>
          <img src={logo} className="App-log" alt="logo" />
        </header>
        {showTimer === true && <Timer />}
        {/* <Timer /> */}
        <button type="button" onClick={this.toggleTimer}>
          {showTimer ? 'Esconder Timer' : 'Mostrar Timer'} 
          </button>
      </div>
    );
  }
}

export default App;

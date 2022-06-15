import React from 'react';
import './App.css';


class App extends React.Component {
  state = {
    emailInput: '',
  }

  handleChange = ({ target }) => {
    this.setState({ emailInput: target.value })
  }
  render() {
    return(
      <div>
        <h1>Hello</h1>
        <input type="text" onChange={ this.handleChange } />
        <button type="button">Clique aqui</button>
    </div>
  );
}
}

export default App;

import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.handleClickSecond = this.handleClickSecond.bind(this);
    this.handleClickThird = this.handleClickThird.bind(this);

    this.state = {
      numeroClick: 0,
      numeroClickSecond: 0,
      numeroClickThird: 0,
    }
  }

  handleClick() {
    this.setState((prevState) => ({
      numeroClick: prevState.numeroClick + 1
    }))
  }

  handleClickSecond() {
    this.setState((prevState, _props) => ({
      numeroClickSecond: prevState.numeroClickSecond + 1
    }))
  }

  handleClickThird() {
    this.setStare((prevState) => ({
      numeroClickThird: prevState.numeroClickThird + 1
    }))
  }

  getButtonColor(num) {
    return num % 2 === 0 ? 'green' : 'white';
  }

  render() {
    const { numeroClick, numeroClickSecond, numeroClickThird } = this.state;
    return (
      <div>
        <h1>Counting buttons</h1>
        <button
          onClick={this.handleClick}
          style={{ backgroundColor: this.getButtonColor(numeroClick) }}
        >{this.state.handleClick}
        </button>
        <button
          onClick={this.handleClickSecond}
          style={{ backgroundColor: this.getButtonColor(numeroClickSecond) }}
        >
          {this.state.numeroClickSecond}</button>
        <button
          onClick={this.handleClickThird}
          style={{ backgroundColor: this.getButtonColor(numeroClickThird) }}
        >
          {this.state.handleClickThird}</button>
      </div>
    );
  }
}

export default App;
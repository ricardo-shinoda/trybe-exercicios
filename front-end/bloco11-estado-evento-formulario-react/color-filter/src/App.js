import './App.css';
import colors from './Data/ColorData';
import React from 'react';

class App extends React.Component {
// inicialização do state
state = {
  typedText: '',
}
 //mudança do state
handleChange = (event) => {
  this.setState({typedText: event.target.value})
}
  render() {
    return (
      <div>
        <h1> Color List</h1>
        <input value={this.state.typedText} onChange={this.handleChange}type="text" />
        <button onClick={() => this.setState({typedText: ''})}>clear input</button>
        <hr />
        <ul>
          {colors
          .filter(element => element.name.includes(this.state.typedText))
          .map((element => {
            return (
              <li key={element.hex}>
                <div style={{ backgroundColor: element.hex }} className="color-display"></div>
                {element.name}</li>
            )
          }))}
        </ul>
      </div >
    );
  }
}

export default App;

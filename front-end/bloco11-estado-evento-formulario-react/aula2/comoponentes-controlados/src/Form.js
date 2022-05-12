import React from 'react';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(event) {
    this.setState({
      email: event.target.value,
    });
  }
  render() {
    const { email } = this.state;
    return (
      <div>
        <h1> Quiz form </h1>
        <form>
          <label>Name: <input id="name" name="name" text="text" /></label>
          <label>Email: <input id="email" name="email" type="email" onChange={this.handleChange} value={email} /></label>
          <label>Age: <select id="age" name="age" defaultValue="">
            <option value="">Selecione</option>
            <option value="adult">Maior que 18</option>
            <option value="underage">Menor que 18</option>
          </select>
          </label>

          <label htmlFor="textField" >Text Field:<textarea id="textField" name="textField" />

          </label>
        </form>
      </div >
    );
  }
}

export default Form;
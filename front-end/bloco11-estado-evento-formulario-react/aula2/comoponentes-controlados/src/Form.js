import React from 'react';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      age: '',
      checkbox: false,
      textField: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }
  render() {
    const { name, email, age, textField, checkbox } = this.state;
    return (
      <div>
        <h1> Quiz form </h1>
        <form>
          <fieldset>
            <label>Name:
              <input
                id="name"
                name="name"
                type="text"
                onChange={this.handleChange}
                value={name}
              />
            </label>

            <label>Email:
              <input
                id="email"
                name="email"
                type="email"
                onChange={this.handleChange}
                value={email}
              />
            </label>
          </fieldset>

          <label>Age:
            <select
              id="age"
              name="age"
              defaultValue=""
              onChange={this.handleChange}
              value={age}>
              <option value="">Selecione</option>
              <option value="adult">Maior que 18</option>
              <option value="underage">Menor que 18</option>
            </select>
          </label>

          <label>Vai comparecer?
            <input
              id="checkbox"
              name="vaiComparecer"
              type="checkbox"
              onChange={this.handleChange}
              value={checkbox}
            />
          </label>

          <label htmlFor="textField">Text Field:
            <textarea
              id="textField"
              name="textField"
              onChange={this.handleChange}
              value={textField}
            />
          </label>

          <input type="file" />

        </form>
      </div >
    );
  }
}

export default Form;
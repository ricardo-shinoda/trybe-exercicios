import React from 'react';
import EmailInput from './EmailInput';
import PasswordInput from './PasswordInput';
import NameInput from './NameInput';

class Register extends React.Component {
    state = {
        name: '',
        email: '',
        password: '',
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {
        const { email, password, name } = this.state
        return (
            <section>
                <form> 
                <h2>Register</h2>
                    <NameInput name={name} onInputChange={this.handleChange} />
                    <EmailInput email={email} onInputChange={this.handleChange} />
                    <PasswordInput password={password} onInputChange={this.handleChange} />
                    <button type="submit">Fazer Registro</button>
                </form>
            </section>
        )
    }
}

export default Register;

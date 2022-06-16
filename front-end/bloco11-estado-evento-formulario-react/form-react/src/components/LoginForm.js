import React from 'react';
import EmailInput from './EmailInput';
import PasswordInput from './PasswordInput';

class LoginForm extends React.Component {
    state = {
        email: '',
        password: '',
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = (event) => {
        const { email, password } = this.state
        event.preventDefault()
        alert(`Login ${email} e senha ${password} enviados`)
    }

    render() {
        const { email, password } = this.state
        return (
            <section>
                <form onSubmit={this.handleSubmit}>
                    <h2>Login</h2>
                    <EmailInput email={email} onInputChange={this.handleChange} />
                    <PasswordInput password={password} onInputChange={this.handleChange} />
                    <button type="submit">Fazer Login</button>
                </form>
            </section>
        )
    }
}

export default LoginForm;

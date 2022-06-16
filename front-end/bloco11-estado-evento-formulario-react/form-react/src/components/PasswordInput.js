import React from 'react';

class PasswordInput extends React.Component {
    render() {
        const { password, onInputChange } = this.props
        return (
            <label htmlFor="password">Senha
                <input name="password" value={password} onChange={onInputChange} type="password" id="email" />
            </label>
        )
    }
}

export default PasswordInput;

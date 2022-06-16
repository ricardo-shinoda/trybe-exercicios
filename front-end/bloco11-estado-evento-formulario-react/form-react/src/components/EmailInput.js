import React from 'react';

class EmailInput extends React.Component {
    render() {
        const { email, onInputChange } = this.props
        return (
            <label htmlFor="email">Email
                <input name="email" value={email} onChange={onInputChange} type="email" id="email" />
            </label>
        )
    }
}

export default EmailInput;
import React from 'react';

class NameInput extends React.Component {
    render() {
        const { name, onInputChange } = this.props
        return (
            <label htmlFor="name">Nome
                <input name="name" value={name} onChange={onInputChange} type="name" id="name" />
            </label>
        )
    }
}

export default NameInput;
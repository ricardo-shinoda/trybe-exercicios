import React from 'react';

//! using class
class Data extends React.Component {
    render() {
        return (
            <p>Hey there! My name is {this.props.name} </p>
        )
    }
}

//! Using function
// function Data(props) {
//     const nome = props.name;
//     return (
//         <p> meu nome é {nome}</p>
//     )
// }

export default Data;
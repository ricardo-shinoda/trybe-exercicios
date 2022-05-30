import React from 'react';
import App from './App';

//! Using class
class Data extends React.Component {
    render(props) {
        const name = props.name;
        return (
            <div>
                <p>Hey there! May name is {name}</p>
            </div>
        )
    }
}

//! using function
// function Data(props) {
//     const name = props.name;
//     return (
//         <div>
//             <p> Oi, meu nome é {name} </p>
//         </div>
//     )
// }



export default Data;
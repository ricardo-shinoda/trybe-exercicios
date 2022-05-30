import React from 'react';

//! Using class
// class Data extends React.Component {
//     render(props) {
//         // console.log("render.props")
//         const name = props.name;
//         return (
//             <div>
//                 <p>Hey there! May name is {name}</p>
//             </div>
//         )
//     }
// }

//! using function
function Data(props) {
    console.log("test")
    const name = props.name;
    return (
        <div>
            <p> Oi, meu nome é {name} </p>
        </div>
    )
}

export default Data;
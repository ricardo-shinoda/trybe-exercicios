import React from "react";
class Card extends React.Component{
    render(){
        console.log(this.props.title);
        return(
            <article>
                <h3>{this.props.nome}</h3>
                <h2>{this.props.ano}</h2>
            </article>
        )
    }
}

export default Card
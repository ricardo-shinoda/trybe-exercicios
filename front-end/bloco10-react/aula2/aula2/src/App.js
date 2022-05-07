import './App.css';
import content from './List';
import React from "react";
import Card from './Card';

class App extends React.Component {
  render() {
    return (
      <div>
        {
          content.map(item => {
            console.log(item);
            return <Card />
          })
        }
      </div>
    )
  }
}

export default App;

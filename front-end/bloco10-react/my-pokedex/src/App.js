import React from 'react';
import './App.css';
import pokemonDados from './data';
//Import do json criado com os pokemons e seus dados.
import Pokedex from './Pokedex';

class App extends React.Component {
render() {
  return (
    <div className="App">
      <h1> Pokedex </h1>
      <Pokedex pokemons={pokemonDados} />
    </div>
  );
}

}

export default App;
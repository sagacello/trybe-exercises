import React from 'react';
import './App.css';
import pokemons from './data';
import Pokedex from './funcaoPokedex';
// parametroPoke é o nome definido na prop
// pokemons é o importado

function App() {
  return (
    <div className="App">
      <h1> Pokedex </h1>
      <Pokedex parametroPoke={pokemons} />
    </div>
  );
}

export default App;
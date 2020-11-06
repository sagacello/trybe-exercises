import React from 'react';
import Pokemon from './funcaoPokemons';

// o map é feito em pokemons , mais pokemons so vai ser passado no App.js
class Pokedex extends React.Component {
    render() {
        return (
            <div >
                {this.props.parametroPoke.map(pokemon => <Pokemon key={pokemon.id} parametroPoke={pokemon} />)}
                
            </div>
        );
    }
}

export default Pokedex;
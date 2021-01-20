import { useState, useEffect } from 'react';

const useAbility = () => {
  const [pokeUrl, setPokeUrl] = useState('');
  const [pokemonAbilities, setPokemonAbilities] = useState([]);
  useEffect(async () => {
    if (pokeUrl !== '') {
      const results = await fetch(pokeUrl)
        .then((response) => response.json())
        .then((data) => data.abilities); // busco as abilidades dos pokemons
      const abilities = results.map(({ ability }) => ability.name); // monto uma lista
      setPokemonAbilities(abilities); // troco no meu estado
    }
  }, [pokeUrl]); // toda vez que a minha url trocar eu busco o pokeUrl
  return [pokemonAbilities, setPokeUrl]; // tenho que retornar a função que troca a url , porque la no outro arquivo eu preciso
  // trocar a url e tambem precisa da lista de abilidades 
};

export default useAbility;

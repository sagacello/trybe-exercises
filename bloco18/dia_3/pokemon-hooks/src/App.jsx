import React, { useEffect, useState } from 'react';
import useAbility from './hooks/useAbility'
function App() {
  const [pokemons, setPokemons] = useState([])
  const [limit, setLimit] = useState(10)
  const [abilities,setPokeUrl] = useAbility() // dessa forma eu tiro o retorno de useAbility
  const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}`;

  useEffect(async () => {
    const {results} = await fetch(url).then((response) => response.json());
    setPokemons(results)
  },[limit]);

  const handleMorePokemons = () => {
    setLimit(limit + 5)
  }
  return (<div>
    <h1>{abilities.toString()}</h1>
    <button type="button" onClick={handleMorePokemons}>Buscar mais</button>
    <ul>
      {
        pokemons.map(({name, url }) => <li key={name} onClick={() => setPokeUrl(url)}>{name}</li>)
      }
    </ul>
  </div>);
}

export default App;

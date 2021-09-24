import React, {useState, useEffect} from 'react';
import PokeBall from './PokeBall/PokeBall.js';
import './App.scss';

function App() {

  const [allPokemon, setPokemon] = useState([]);
  const [errorMsg, setError] = useState(false);

  useEffect(() => {

    const fetchPokemon = async () => {
      try {
        const RESPONSE = await fetch('https://pokeapi.co/api/v2/pokemon?limit=500/');
        let rawPokemonList = await RESPONSE.json();
        rawPokemonList = rawPokemonList.results;

        setPokemon(rawPokemonList);

      } catch (error) {
        console.log("error while fetching pokemon list", error);
        setError(true);
      }
    };

    fetchPokemon();

  }, []);


  return (
    <div className="App pokemon-app">
      <section className={`pk-logo`} />
      <section className={`pokemon-list`}>
      {errorMsg && <div><h3>An error has occurred. Please reload the page.</h3></div>}
      {
        allPokemon.length > 0 && allPokemon.map( (pokemon, i) =>
          <div key={i}>
            <PokeBall url={pokemon.url} name={pokemon.name}/>
          </div>
        )
      }
      </section>
    </div>
  );
}

export default App;

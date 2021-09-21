import './App.scss';
import React, {useState, useEffect} from 'react';
import PokeBall from './PokeBall/PokeBall.js';

function App() {

  const [allPokemon, setPokemon] = useState([]);

  useEffect(() => {

    const fetchPokemon = async () => {
      try {
        const RESPONSE = await fetch('https://pokeapi.co/api/v2/pokemon?limit=500/');
        let rawPokemonList = await RESPONSE.json();
        rawPokemonList = rawPokemonList.results;

        rawPokemonList.forEach( (pokemon,i) => {
          let url = pokemon.url;

          fetch(url)
            .then(response => response.json() )
            .then(details => {
              rawPokemonList[i] = {...pokemon, details}
            })

          });

        setPokemon(rawPokemonList);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchPokemon();

  }, []);


  return (
    <div className="App pokemon-app">

      <section className={`pokemon-list`}>
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

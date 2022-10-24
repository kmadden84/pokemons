import './App.css';

import React, { useEffect, useState } from 'react';
import PokeTable from './components/PokeTable';

function App() {

  const [pokemon, setPokemon] = useState(null);
  const [pokemonInfo, setPokemonInfo] = useState([])

  const fetchPokemon = async () => {
    const pokemons = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20')
    const data = await pokemons.json();
    setPokemon(data);
  }

  const fetchPokemonDetails = async () => {
    const allPokemons = pokemon.results;
    allPokemons?.forEach(async function (item) {

      const pokemonUrl = item.url;
      const pokemonData = await fetch(pokemonUrl);
      const data = await pokemonData.json();

      const formattedData = {
        name: data?.name,
        types: data?.types,
        image_url: data?.sprites?.front_default
      };
      setPokemonInfo(prev => prev.concat(formattedData))
    })
  }

  useEffect(function retrieveList() {
    if (!pokemon) fetchPokemon();
  }, [pokemon])


  useEffect(function retrieveDetails() {
    if (pokemon && !pokemonInfo.length) fetchPokemonDetails();
  }, [pokemonInfo, pokemon])


  return (
    <div className="App">
      {pokemonInfo?.length > 0 ? <PokeTable pokemonData={pokemonInfo} /> : null}
    </div>
  );
}

export default App;

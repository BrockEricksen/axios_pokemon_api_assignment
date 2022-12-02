import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [allPokemon, setAllPokemon] = useState([]);

  useEffect(() => {
    axios
      .get('https://pokeapi.co/api/v2/pokemon?limit=807')
      .then((response => {
        setAllPokemon(response.data.results);
      }))
    }, []);

  return (
    <div className="App">
      <h1>All Pokemon:</h1>
      
        {allPokemon.map((pokemon, idx) => (
          <li key={idx}> {pokemon.name} </li>
          ))}
      
    </div>
  );
}

export default App;

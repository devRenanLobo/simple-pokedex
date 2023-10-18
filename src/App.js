import axios from 'axios';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import { useState, useEffect } from 'react';
import PokemonCard from './components/PokemonCard/PokemonCard';

function App() {

  const [pokemons, setPokemons] = useState([]);

  const getPokemons = async() => {

    try {
      
      const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=10&offset=0")
      .then((response) => setPokemons(response.data.results));
    
    } catch (error) {
     
      console.log(error);

    }
  };

  useEffect(() => {
    
    getPokemons();

  }, []);

  return (
    <div className="App">
      <div className='container'>
        <PokemonCard />
        <SearchBar />
        {pokemons.map((pokemon) => console.log(pokemon))}
      </div>
    </div>
  );
}

export default App;

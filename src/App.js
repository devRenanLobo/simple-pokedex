/* eslint-disable jsx-a11y/alt-text */
import './App.css';
import PokemonCard from './components/PokemonCard/PokemonCard';

import logo from "./assets/pokebola.jpg";



function App() {

  return (
    <div className="App">
      <div className='container'>
        <img className='logo' src={logo}/>
        <h1> Buscador de Pokemons</h1>
        <PokemonCard />
      </div>
    </div>
  );
}

export default App;

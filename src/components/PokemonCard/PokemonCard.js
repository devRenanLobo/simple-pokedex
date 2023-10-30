/* eslint-disable jsx-a11y/alt-text */
import { useState} from 'react';
import axios from 'axios';
import './PokemonCard.css'

const PokemonCard = () => {

    const [inputName, setInputName] = useState('');
    const [name, setName] = useState('pikachu');
    const [type, setType] = useState('');
    const [image, setImage] = useState('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg');

    const connectApi = async (pokemonName) => {

        try {
            const URL = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
            const response = await axios.get(URL);
            setName(response.data.name);
            setType(response.data.types[0].type.name);
            setImage(response.data.sprites.other.dream_world.front_default);

        } catch (error) {

            window.alert("POKEMON NOT FOUND");

        }
    };

    const changePokemon = (e) => {
        const newName = e.target.value;
        setInputName(newName);
    };

    const searchClick = () => {
        connectApi(inputName);
    };


    return(
        <div className='pokeData'>
            <img src={image}/> 
            <h1>{name}</h1>
            <h2>{type}</h2>
            <input 
                type="text" 
                placeholder="Digite o nome do pokemon" 
                value= {inputName}
                onChange={changePokemon}
            />
            <button onClick={searchClick}>
                Buscar
            </button>      
        </div>
    )
}

export default PokemonCard;
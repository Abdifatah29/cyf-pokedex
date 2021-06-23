
import React, {useState, useEffect} from 'react';

  const Moves = ({pokemonData}) =>
    <div>
        <p>{pokemonData.name}'s moves:</p>
        <ul>
            {
                Object.keys(pokemonData.moves).map((move, key) => <li key={key}>{pokemonData.moves[move].move['name']}</li>)
            }
        </ul>
    </div>;

function PokemonMoves() {

    const [pokemonData, setPokemonData] = useState(null);

    useEffect(() => {
        console.log("Fetching data from NASA");

        fetch(
        `https://pokeapi.co/api/v2/pokemon/1/`
        )
        .then((res) => res.json())
        .then((data) => {
            setPokemonData(data);
        });
    }, []);

    // (pokemonData ? (<Moves pokemonData={pokemonData}/>) : (null));

    if (pokemonData) {
       return (<Moves pokemonData={pokemonData}/>)
    } else {
        return null;
    }
}

export default PokemonMoves;

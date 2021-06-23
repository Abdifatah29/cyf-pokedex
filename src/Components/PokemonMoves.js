
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

function PokemonMoves({pokemonId}) {

    const [pokemonData, setPokemonData] = useState(null);

    useEffect(() => {
        console.log("Fetching data from NASA");

        fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemonId}/`
        )
        .then((res) => res.json())
        .then((data) => {
            setPokemonData(data);
        });
    }, [pokemonId]);

    return (<div>{pokemonData ? <Moves pokemonData={pokemonData} /> : null}</div>);

}

export default PokemonMoves;

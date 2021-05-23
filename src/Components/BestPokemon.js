import React from 'react';

let abilities =
  [
    'Anticipation',
    'Adaptability',
    'Run-Away'
  ];

const BestPokemon = () => (
    <div>
        <p>My favorite Pokemon is Squirtle!</p>
        <ul>
            {abilities.map((name, index) => (
                <li key={index}>{name}</li>
              ))}
        </ul>
    </div>
  );

  export default BestPokemon;

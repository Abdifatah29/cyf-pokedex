import React from 'react';

const BestPokemon = (props) => (
    <div>
        <p>My favorite Pokemon is Squirtle!</p>
        <ul>
            {props.abilities.map((name, index) => (
                <li key={index}>{name}</li>
              ))}
        </ul>
    </div>
  );

  export default BestPokemon;

import React, { useState } from "react";

import PokemonCity from "./PokemonCity";
import PokemonMoves from "./PokemonMoves";

function PokemonMovesSelector() {
  const [id, setId] = useState(null);

  function handleBulbasaurClick() {
    setId(1);
  }
  function handleCharmanderClick() {
    setId(4);
  }

  return (
    <div>
      <button onClick={handleBulbasaurClick}>Fetch Bulbasaur</button>
      <button onClick={handleCharmanderClick}>Fetch Charmander</button>
      <PokemonCity/>
      {id ? <PokemonMoves pokemonId={id} /> : null}
    </div>
  );
}

export default PokemonMovesSelector;

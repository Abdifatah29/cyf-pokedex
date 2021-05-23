import React from 'react';
import Logo from './Components/Logo';
import BestPokemon from './Components/BestPokemon';
import CaughtPokemon from './Components/CaughtPokemon';


let styles = {
  margin: "0 auto",
  width: "fit-content"
};

function App() {
    return <div className="container" style={styles}>
    <Logo />
    <BestPokemon />
    <CaughtPokemon />
    </div>
}

export default App;

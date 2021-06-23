import React from 'react';
import Logo from './Components/Logo';
import BestPokemon from './Components/BestPokemon';
import CaughtPokemon from './Components/CaughtPokemon';
import Greeting from './Components/Greeting';
import PokemonMovesSelector from './Components/PokemonMovesSelector';



let styles = {
  margin: "0 auto",
  width: "fit-content"
};

let abilities =
  [
    'Anticipation',
    'Adaptability',
    'Run-Away'
  ];

let date = new Date().toLocaleDateString();

 const logWhenClicked = () => {
      console.log('react event Handling ');
  }


function App() {
    return <div className="container" style={styles}>
    <Logo
        appName = "Abdifatah's pokedex"
        handleClick={logWhenClicked}

    />
    <BestPokemon abilities = {abilities}/>
    <CaughtPokemon date = {date}/>
    <PokemonMovesSelector />
    <Greeting />
    </div>
}

export default App;

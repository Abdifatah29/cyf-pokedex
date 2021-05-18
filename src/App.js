import React from 'react';
import HelloWorld from './Components/HelloWorld';

function App() {
    return <div>
    <Logo />,
    <BestPokemon />
    <HelloWorld />
    </div>
}

const Logo = () => (
    <header>
        <h1>Welcome to the Pokedex</h1>
        <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png"/>
    </header>
);

const BestPokemon = () => (
    <p>My favorite Pokemon is Squirtle!</p>
)
export default App;

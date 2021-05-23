import React from 'react';

const Logo = () => {
  let appName =  "Abdifatah's pokedex";
  return(
      <header>
        <h1>Welcome to {appName}</h1>
        <img
          alt="pokedex"
          src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png"/>
      </header>
  )
}

export default Logo;

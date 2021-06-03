import React from 'react';

const Logo = (props) => {
  console.log(props);
  return(
      <header>
        <h1>Welcome to {props.appName}</h1>
        <img
            alt="pokedex"
            src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png"
            onClick={props.handleClick}/>
      </header>
  )
}

export default Logo;

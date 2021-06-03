import React, {useState} from 'react';


//CaughtPokemon Component
const CaughtPokemon = (props) => {
    const [caught, displayCaught] = useState([]);


    let randomPokemoms = [
        "Pikachu",
        "charizard",
        "Landorus",
        "Eevee",
        "Mewtwo",
        "Ho-Oh",
        "Vulpix"
    ];
    let random = Math.floor(Math.random() * randomPokemoms.length)

    const catchPokemon =() => {
         displayCaught(caught.concat(randomPokemoms[random]))
    }

  return (
    <div>
        <div>Caught {caught.map((item, index) => (
            <ul key={index}><li>{item}</li></ul>
        ))} Pokemon (s) on {props.date}</div>
        <button onClick={catchPokemon} >CaughtPokemon </button>
    </div>
  )
}

export default CaughtPokemon;

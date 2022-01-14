/* select the poke_container and 
create a function getPokemon() 
which uses fetch to call the pokemon API*/
const poke_container = document.getElementById('poke_container');
const pokemons_number = 150;

/* create a function fetchPokemon(), 
where we loop through a for loop. 
We call the function getPokemon() 
from inside it with the id from 1 to 150*/
const fetchPokemons = async () => {
    for(let i = 1; i <= pokemons_number; i++) {
        await getPokemon(i);
    }
}

const getPokemon = async id => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch(url);
    const pokemon = await res.json();
    createPokemonCard(pokemon);
}

/* We create a function createPokemonCard(). 
Inside it, we create
a new div with class pokemon. 
*/
const createPokemonCard = (pokemon) => {
    const pokemonEl = document.createElement('div');
    pokemonEl.classList.add('pokemon');
    /*We complete the pokeInnerHTML and 
    show the image, id, name, and type. 
    We add the required html*/
    
    const { id, name, sprites, types } = pokemon;
    const type = types[0].type.name;
    const pokeInnerHtml = `
    <div class="img-container">
        <img src="${sprites.front_default}" alt="${name}" />
    </div>
    <div class="info">
        <span class="number">${id}</span>
        <h3 class="name">${name}</h3>
        <small class="type">Type: <span>${type}</span></small>
    </div>
    `;
    pokemonEl.innerHTML = pokeInnerHtml;
    poke_container.appendChild(pokemonEl);
}

fetchPokemons();
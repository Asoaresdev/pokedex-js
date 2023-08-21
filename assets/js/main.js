const offset = 0
const limit = 10
const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`


function convertPokemonTypesToLi (pokeomnsTypes) {
    return pokeomnsTypes.map((typeSlot) => {
        return (`<li class="type">${typeSlot.type.name}</li>`)
    })
}

function convertPokemonToHtml(pokemon) {
    return `
    <li class="pokemon">
        <span class="number">#${pokemon.order}</span>
        <span class="name">${pokemon.name}</span>
        <div class="detail">
            <ol class="types">
                ${convertPokemonTypesToLi(pokemon.types).join(" ")}
            </ol>
            <img src="${pokemon.sprites.other.dream_world.front_default}"
                alt="${pokemon.name}">
        </div>
    </li>
    `
}

const pokemonListLi = document.getElementById("pokemonList")


pokeApi.getPokemons()
    .then((pokemonList=[]) => {
        const newListPokemons = pokemonList.map((pokemon)=>{
            return convertPokemonToHtml(pokemon)
        })
        const newHtml = newListPokemons.join("")
        pokemonListLi.innerHTML += newHtml
          
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log("sucesso na requisição");
    })
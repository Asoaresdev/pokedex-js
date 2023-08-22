let offset = 0
const limit = 5
let maxLimit = 15

const pokemonListLi = document.getElementById("pokemonList")
const loadMoreItems = document.getElementById("loadMorePokemons")
 
function convertPokemonTypesToLi (pokeomnsTypes) {

    return pokeomnsTypes.map((typeSlot) => {
        return (`<li class="type ${typeSlot.type.name}">${typeSlot.type.name}</li>`)
    })
}

function convertPokemonToHtml(pokemon) {
    
    return `
    <li class="pokemon ${pokemon.types[0].type.name}">
        <span class="number">#${pokemon.id}</span>
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

function loadMorePokemon (offset, limit) {

    pokeApi.getPokemons(offset, limit)
        .then((pokemonList=[]) => {
            const newListPokemons = pokemonList.map((pokemon)=>{
                return convertPokemonToHtml(pokemon)
            })
            const newHtml = newListPokemons.join("")
            pokemonListLi.innerHTML += newHtml   
        })   
}

loadMorePokemon(offset, limit)

loadMoreItems.addEventListener("click", ()=>{
    
    offset += limit
    const qtdLimit = offset + limit 
    
    if(qtdLimit >= maxLimit){
        loadMorePokemon(maxLimit, limit)
        loadMoreItems.parentElement.removeChild(loadMoreItems)
    }else{
        loadMorePokemon(offset, limit)
    }
})
    
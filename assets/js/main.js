const offset = 0
const limit = 10
const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`

function convertPokemonToHtml(pokemon) {
    return `
    <li class="pokemon">
        <span class="number">#001</span>
        <span class="name">${pokemon.name}</span>
        <div class="detail">
            <ol class="types">
                <li class="type">grass</li>
                <li class="type">poison</li>
            </ol>
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
                alt="${pokemon.name}">
        </div>
    </li>
    `
}

const pokemonListLi = document.getElementById("pokemonList")


fetch(url)
    .then((response) => {
        return response.json()
    })
    .then((responseBodyJson) => {
        return responseBodyJson.results
    })
    .then((pokemonList) => {
        for (let index = 0; index < pokemonList.length; index++) {
            const pokemon = pokemonList[index];
            pokemonListLi.innerHTML +=convertPokemonToHtml(pokemon) 
        }
          
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log("sucesso na requisição");
    })
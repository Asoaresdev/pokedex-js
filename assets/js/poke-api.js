
const pokeApi = {}

// pokeApi.getPokemonDetail = (pokemon) => {
//     return fetch(pokemon.url)
//         .then((response) => response.json())
// }


pokeApi.getPokemons = (offset = 0, limit = 10) => {

    const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`

    return fetch(url)
        .then((response) => {
            return response.json()
        })
        .then((responseBodyJson) => {
            return responseBodyJson.results
        })
        // .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))
        .then((pokemons) => pokemons.map((pokemon => {
            return fetch(pokemon.url)
            .then((response) => response.json())
        })))

        .then((detailRequest) => {

            return Promise.all(detailRequest)
        })
        .then((pokemonDetails) => {
            return pokemonDetails
        })
        .catch((error) => {
            console.log(error);
        })
}


const pokeApi = {}

pokeApi.getPokemons =  (offset =0, limit = 10) => {
  
    const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`

    return fetch(url)
    .then((response) => {
        return response.json()
    })
    .then((responseBodyJson) => {
        return responseBodyJson.results
    })
    .catch((error) => {
        console.log(error);
    })
}

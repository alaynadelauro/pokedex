import { AppState } from "../AppState.js"
import { Pokemon } from "../models/Pokemon.js"
import { pokeApi } from "./AxiosService.js"

class PokemonService {
    async getPokemon() {
        // console.log('we made it to the Service')
        const res = await pokeApi.get(`api/v2/pokemon?limit=10000$offset=0`)
        // console.log('pokemon', res.data)
        const newPoke = res.data.results.map(poke => new Pokemon(poke))
        // console.log('pokemon in appstate', AppState.pokemon)
        AppState.pokemon = newPoke
    }
    async setActivePokemon(pokemonName) {
        try {
            const res = await pokeApi.get(`api/v2/pokemon/${pokemonName}`)
            console.log(res, res.data, 'this pokemon')

        } catch (error) {
            Pop.error(error)
            console.log(error)
        }
    }
}

export const pokemonService = new PokemonService
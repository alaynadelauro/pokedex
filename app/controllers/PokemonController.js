import { AppState } from "../AppState.js"
import { pokemonService } from "../services/PokemonService.js"
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js"

function _drawPokedex() {
    const pokemon = AppState.pokemon
    let content = ''
    // console.log('pokemon in draw', pokemon)
    pokemon.forEach(pokemon => content += pokemon.pokeList)
    // console.log('getting content', content)
    setHTML('pokedex', content)
    // console.log('got content', content)
}

export class PokemonController {
    constructor() {
        // console.log('the PokemonController Loaded')
        this.getPokemon()

        AppState.on('pokemon', _drawPokedex)
    }
    async getPokemon() {
        try {
            await pokemonService.getPokemon()
        } catch (error) {
            Pop.error(error)
            console.log(error)
        }
    }
    async setActivePokemon(pokemonName) {
        try {
            console.log(pokemonName, 'button clicked')
            await pokemonService.setActivePokemon(pokemonName)
        } catch {
            Pop.error(error)
            console.log(error)
        }

    }
}
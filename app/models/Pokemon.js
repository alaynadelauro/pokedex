export class Pokemon {
    constructor(data) {
        this.name = data.name
        this.url = data.url
    }
    get pokeList() {
        return `
        <div class="m-2">
            <button class="btn btn-danger w-100" onclick="app.PokemonController.setActivePokemon('${this.name}')">${this.name}</button>
        </div>
        `
    }
}
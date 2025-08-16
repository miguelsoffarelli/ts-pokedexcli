export class PokeAPI {
    static baseURL = "https://pokeapi.co/api/v2";
    #cache;
    constructor(cache) {
        this.#cache = cache;
    }
    async fetchLocations(pageURL) {
        const fullURL = pageURL || `${PokeAPI.baseURL}/location-area/`;
        const cachedLocations = this.#cache.get(fullURL);
        if (cachedLocations) {
            return cachedLocations;
        }
        const response = await fetch(fullURL);
        if (!response.ok) {
            throw new Error(`Failed to fetch locations: ${response.status}`);
        }
        const locations = await response.json();
        this.#cache.add(fullURL, locations);
        return locations;
    }
    async fetchLocation(locationName) {
        const fullURL = `${PokeAPI.baseURL}/location-area/${locationName}`;
        const cachedLocation = this.#cache.get(fullURL);
        if (cachedLocation) {
            return cachedLocation;
        }
        const response = await fetch(fullURL);
        if (!response.ok) {
            throw new Error(`Failed to fetch location: ${response.status}`);
        }
        const location = await response.json();
        this.#cache.add(fullURL, location);
        return location;
    }
    async fetchPokemon(pokemonName) {
        const fullURL = `${PokeAPI.baseURL}/pokemon/${pokemonName}`;
        const response = await fetch(fullURL);
        if (!response.ok) {
            throw new Error(`Failed to fetch pokemon: ${response.status}`);
        }
        const pokemon = await response.json();
        return pokemon;
    }
}

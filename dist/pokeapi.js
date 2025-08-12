export class PokeAPI {
    static baseURL = "https://pokeapi.co/api/v2";
    constructor() { }
    async fetchLocations(pageURL) {
        const fullURL = pageURL || `${PokeAPI.baseURL}/location-area/`;
        const response = await fetch(fullURL);
        if (!response.ok) {
            throw new Error(`Failed to fetch locations: ${response.status}`);
        }
        const locations = await response.json();
        return locations;
    }
    async fetchLocation(locationName) {
        const fullURL = `${PokeAPI.baseURL}/location-area/${locationName}`;
        const response = await fetch(fullURL);
        if (!response.ok) {
            throw new Error(`Failed to fetch location: ${response.status}`);
        }
        const location = await response.json();
        return location;
    }
}

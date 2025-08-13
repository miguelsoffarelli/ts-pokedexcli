import { Cache } from "./pokecache.js"

export class PokeAPI {
  private static readonly baseURL = "https://pokeapi.co/api/v2";
  #cache: Cache;

  constructor(cache: Cache) {
    this.#cache = cache;
  }

  async fetchLocations(pageURL?: string): Promise<ShallowLocations> {
    const fullURL = pageURL || `${PokeAPI.baseURL}/location-area/`;
    const cachedLocations = this.#cache.get<ShallowLocations>(fullURL);
    if (cachedLocations) {
        return cachedLocations;
    }
    const response = await fetch(fullURL);
    if (!response.ok) {
        throw new Error(`Failed to fetch locations: ${response.status}`);
    }
    const locations = await response.json() as ShallowLocations;
    this.#cache.add(fullURL, locations);
    return locations;
  }

  async fetchLocation(locationName: string): Promise<LocationArea> {
    const fullURL = `${PokeAPI.baseURL}/location-area/${locationName}`;
    const cachedLocation = this.#cache.get<LocationArea>(fullURL);
    if (cachedLocation) {
        return cachedLocation;
    }
    const response = await fetch(fullURL);
    if (!response.ok) {
        throw new Error(`Failed to fetch location: ${response.status}`);
    }
    const location = await response.json() as LocationArea;
    this.#cache.add(fullURL, location);
    return location;
  }
}

export type ShallowLocations = {
  count: number,
  next: string | null,
  previous: string | null,
  results: LocationAreaSummary[],
}

export type LocationAreaSummary = {
  name: string,
  url: string,
}

export type LocationArea = {
  encounter_method_rates: EncounterMethodRate[],
  game_index: number,
  id: number,
  location: Location,
  name: string,
  names: Name[],
  pokemon_encounters: PokemonEncounter[],
}

export type EncounterMethodRate = {
  encounter_method: EncounterMethod,
  version_details: VersionDetail[],
}

export type EncounterMethod = {
  name: string,
  url: string,
}

export type VersionDetail = {
  rate: number,
  version: Version,
}

export type Version = {
  name: string,
  url: string,
}

export type Location = {
  name: string,
  url: string,
}

export type Name = {
  language: Language,
  name: string,
}

export type Language = {
  name: string,
  url: string,
}

export type PokemonEncounter = {
  pokemon: Pokemon,
  version_details: VersionDetail2[],
}

export type Pokemon = {
  name: string,
  url: string,
}

export type VersionDetail2 = {
  encounter_details: EncounterDetail[],
  max_chance: number,
  version: Version2,
}

export type EncounterDetail = {
  chance: number,
  condition_values: any[],
  max_level: number,
  method: Method,
  min_level: number,
}

export type Method = {
  name: string,
  url: string,
}

export type Version2 = {
  name: string,
  url: string,
}

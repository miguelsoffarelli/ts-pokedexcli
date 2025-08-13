import { createInterface, type Interface } from "node:readline";
import { getCommands } from "./commands.js";
import { PokeAPI } from "./pokeapi.js";
import { Cache } from "./pokecache.js";

export type CLICommand = {
    name: string,
    description: string,
    callback: (state: State) => Promise<void>,
}

export type State = {
    readline: Interface,
    commands: Record<string, CLICommand>,
    pokeapi: PokeAPI,
    nextLocationsURL: string | null,
    prevLocationsURL: string | null,
}

export function initState(cache: Cache): State {
    return {
        readline: createInterface({
            input: process.stdin,
            output: process.stdout,
            prompt: "Pokedex > ",
        }),
        commands: getCommands(),
        pokeapi: new PokeAPI(cache),
        nextLocationsURL: null,
        prevLocationsURL: null,
    }
}
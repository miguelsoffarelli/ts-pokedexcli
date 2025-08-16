import { createInterface } from "node:readline";
import { getCommands } from "./commands.js";
import { PokeAPI } from "./pokeapi.js";
export function initState(cache) {
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
        pokedex: {},
    };
}

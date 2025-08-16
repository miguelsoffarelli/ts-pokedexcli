import type { CLICommand } from "./state.js";
import { commandExit } from "./command_exit.js";
import { commandHelp } from "./command_help.js";
import { map, mapb } from "./command_map.js";
import { explore } from "./command_explore.js";
import { commandCatch } from "./command_catch.js";
import { inspect } from "util";
import { commandInspect } from "./command_inspect.js";
import { commandPokedex } from "./command_pokedex.js";

export function getCommands(): Record<string, CLICommand> {
    return {
        exit: {
            name: "exit",
            description: "Exits the pokedex",
            callback: commandExit,
        },
        help: {
            name: "help",
            description: "Displays a help message",
            callback: commandHelp,
        },
        map: {
            name: "map",
            description: "Displays next 20 location areas",
            callback: map,
        },
        mapb: {
            name: "mapb",
            description: "Displays previous 20 location areas",
            callback: mapb,
        },
        explore: {
            name: "explore",
            description: "Displays Pokemons in the location area",
            callback: explore,
        },
        catch: {
            name: "catch",
            description: "Catch a Pokemon",
            callback: commandCatch,
        },
        inspect: {
            name: "inspect",
            description: "Inspect a Pokemon from your Pokedex",
            callback: commandInspect,
        },
        pokedex: {
            name: "pokedex",
            description: "Inspect your Pokedex",
            callback: commandPokedex,
        },
    }
}
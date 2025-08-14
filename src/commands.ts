import type { CLICommand } from "./state.js";
import { commandExit } from "./command_exit.js";
import { commandHelp } from "./command_help.js";
import { map, mapb } from "./command_map.js";
import { explore } from "./command_explore.js";

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
    }
}
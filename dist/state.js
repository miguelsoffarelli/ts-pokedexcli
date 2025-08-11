import { createInterface } from "node:readline";
import { getCommands } from "./commands.js";
export function initState() {
    return {
        readline: createInterface({
            input: process.stdin,
            output: process.stdout,
            prompt: "Pokedex > ",
        }),
        commands: getCommands(),
    };
}

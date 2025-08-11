import { createInterface } from "node:readline";
import * as commands from "./commands.js";

export function cleanInput(input: string): string[] {
    const words = [];
    for (const word of input.toLowerCase().trim().split(/\s+/)) {
        words.push(word);
    }
    return words;
}

export const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "Pokedex > ",
});

export function startREPL() {
    rl.prompt();
    rl.on("line", (input: string) => {
        const cleanIn = cleanInput(input);
        if (cleanIn.length === 0) {
            rl.prompt();
            return;
        }
        const command = cleanIn[0];
        const commandList = commands.getCommands();

        if (command in commandList) {
            try {
                commandList[command].callback(commandList);
            } catch (err) {
                if (err instanceof Error) {
                    console.log(err.message);
                } else {
                    console.log(err);
                }
            }
        } else {
            console.log("Unknown command");
        }
        rl.prompt();
    })
}
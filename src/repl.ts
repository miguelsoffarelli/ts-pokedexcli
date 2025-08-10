import { createInterface } from "node:readline";

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
        console.log(`Your command was: ${cleanIn[0]}`);
        rl.prompt();
    })
}
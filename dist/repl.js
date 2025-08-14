export function cleanInput(input) {
    const words = [];
    for (const word of input.toLowerCase().trim().split(/\s+/)) {
        words.push(word);
    }
    return words;
}
export function startREPL(state) {
    state.readline.prompt();
    state.readline.on("line", (input) => {
        const cleanIn = cleanInput(input);
        if (cleanIn.length === 0) {
            state.readline.prompt();
            return;
        }
        const command = cleanIn[0];
        const args = cleanIn.slice(1);
        if (command in state.commands) {
            try {
                state.commands[command].callback(state, ...args);
            }
            catch (err) {
                if (err instanceof Error) {
                    console.log(err.message);
                }
                else {
                    console.log(err);
                }
            }
        }
        else {
            console.log("Unknown command");
        }
        state.readline.prompt();
    });
}

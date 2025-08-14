import { startREPL } from "./repl.js";
import { initState } from "./state.js";
import { Cache } from "./pokecache.js";
function main() {
    const cache = new Cache(5 * 60 * 1000);
    const state = initState(cache);
    startREPL(state);
}
main();

import { State } from "./state";

export async function commandInspect(state: State, ...args: string[]): Promise<void> {
    if (args.length !== 1) {
        throw new Error("you must provide a pokemon name");
    }
    const pokemonName = args[0];

    if (pokemonName in state.pokedex) {
        const pokemon = state.pokedex[pokemonName];
        console.log(`Name: ${pokemon.name}`);
        console.log(`Height: ${pokemon.height}`);
        console.log(`Weight: ${pokemon.weight}`);
        console.log("Stats:");
        for (const stat of pokemon.stats) {
            console.log(`   -${stat.stat.name}: ${stat.base_stat}`);
        }
        console.log("Types:");
        for (const type of pokemon.types) {
            console.log(`   - ${type.type.name}`)
        }
    } else {
        console.log(`Pokemon ${pokemonName} is not in your Pokedex, use command catch to catch it first!`);
    }
}
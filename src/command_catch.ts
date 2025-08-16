import { State } from "./state";

export async function commandCatch(state: State, ...args: string[]): Promise<void> {
    if (args.length !== 1) {
        throw new Error("you must provide a pokemon name");
    }
    const pokemonName = args[0];
    const pokemonData = await state.pokeapi.fetchPokemon(pokemonName);
    let chance = 1.0 / (pokemonData.base_experience / 50.0);
    chance = Math.min(Math.max(chance, 0.1), 0.99); // Make sure the chance is not lower than 0.1 or higher than 0.99

    console.log(`Throwing a Pokeball at ${pokemonName}...`);

    if (Math.random() <= chance) {
        state.pokedex[pokemonName] = pokemonData;
        console.log(`${pokemonName} was caught!`);
        console.log("You can inspect it with the inspect command");
    } else {
        console.log(`${pokemonName} escaped!`);
    }
}
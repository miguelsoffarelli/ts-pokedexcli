export async function explore(state, ...args) {
    if (args.length !== 1) {
        throw new Error("you must provide a location name");
    }
    const area = args[0];
    const locationAreaData = await state.pokeapi.fetchLocation(area);
    console.log(`Exploring ${area}...`);
    console.log("Found Pokemon:");
    for (const pokemon of locationAreaData.pokemon_encounters) {
        console.log(`- ${pokemon.pokemon.name}`);
    }
}

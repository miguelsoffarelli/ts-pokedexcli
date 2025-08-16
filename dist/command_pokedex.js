export async function commandPokedex(state) {
    if (Object.keys(state.pokedex).length === 0) {
        console.log("Your Pokedex is empty. Use command catch to catch your first Pokemon!.");
        return;
    }
    console.log("Your Pokedex:");
    for (const name in state.pokedex) {
        console.log(`- ${name}`);
    }
}

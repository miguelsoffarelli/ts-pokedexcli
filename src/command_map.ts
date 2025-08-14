import { State } from "./state.js";

export async function map(state: State): Promise<void> {
    const pageURL = state.nextLocationsURL ? state.nextLocationsURL : undefined;
    const locations = await state.pokeapi.fetchLocations(pageURL);
    for (const location of locations.results) {
        console.log(location.name);
    }

    state.nextLocationsURL = locations.next;
    state.prevLocationsURL = locations.previous;
}

export async function mapb(state: State): Promise<void> {
    if (!state.prevLocationsURL) {
        console.log("You're in the first page");
        return;
    }

    const locations = await state.pokeapi.fetchLocations(state.prevLocationsURL);
    for (const location of locations.results) {
        console.log(location.name);
    }

    state.nextLocationsURL = locations.next;
    state.prevLocationsURL = locations.previous;
}
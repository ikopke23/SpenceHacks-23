import { Panda } from "./canvas/panda.js";

class Building {
    constructor() {
        this.x = x;
        this.y = y;
    }
}

export let sprites = {
    congress: null,
    house: null,
    skyscrapers: [],
};

let buildings = [];

export async function load() {
    sprites.congress = await Panda.sprite("assets/congress.jpg");
    sprites.house = await Panda.sprite("assets/house.jpg");

    let skyscrapers = [];
    for (let i = 1; i < 7; i++) {
        skyscrapers.push(Panda.sprite(`assets/skyscraper${i + 1}.jpg`));
    }

    sprites.skyscrapers = await Promise.all(skyscrapers);
    console.log("loaded", sprites);
}

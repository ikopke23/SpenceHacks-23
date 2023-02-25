import { Panda } from "./canvas/panda.js";
import { load, sprites } from "./buildings.js";

function main() {
    const container = document.querySelector("#canvas");
    Panda.init({ container });
    Panda.run(update, draw, load);
}

function update() {}

function draw() {
    Panda.draw.clear();
    Panda.draw.backgroundColor = [255, 255, 255];
    sprites.congress.draw();
}

main();

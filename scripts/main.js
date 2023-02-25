import { Panda } from "./canvas/panda.js";
import Buildings from "./buildings.js";
import "./build.js";

function main() {
    const container = document.querySelector("#canvas");

    Panda.init({ container });
    Panda.run(update, draw);

    Buildings.init();
}

function update() {}

function draw() {
    Panda.draw.clear();
    Panda.draw.backgroundColor = [255, 255, 255];
    Buildings.draw();
}

main();

import { Panda } from "./canvas/panda.js";

function main() {
    const container = document.querySelector("#canvas");
    Panda.init({ container });
    Panda.run(update, draw);
}

function update() {}

function draw() {
    Panda.draw.clear();
}

main();

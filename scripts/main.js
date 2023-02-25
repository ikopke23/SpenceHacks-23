import { Panda } from "./canvas/panda.js";

function main() {
    const container = document.querySelector("#app");
    Panda.init({ container });
    Panda.run(update, draw);
}

function update() {}

function draw() {
    Panda.draw.clear();
    Panda.draw.text("hello world!", 50, 50, { color: "white" });
}

main();

import { Panda } from "./canvas/panda.js";
import Buildings from "./buildings.js";
import "./build.js";
import { gameData } from "./politics.js";


function main() {
    const container = document.querySelector("#canvas");

    Panda.init({ container });
    Panda.run(update, draw);

    Buildings.init();
}

function update() {
    if (gameData.budget < 0 || gameData.graySupport < 25 || gameData.greenSupport < 25) gameOver();
}

function draw() {
    Panda.draw.clear();
    Panda.draw.backgroundColor = [255, 255, 255];
    Buildings.draw();  

}

function gameOver() {
    const element = document.querySelector("#game-over");
    element.showModal();
}

main();

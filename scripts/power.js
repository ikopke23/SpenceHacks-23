import { gameData } from "./politics.js";
import Buildings, { WindTurbine } from "./buildings.js";

const Wind = {
    cost: 2000000,
    greenSupport: 10,
    graySupport: -10,
    ruralOpinion: 5,
};

const windmill = document.querySelector("#windmill");
windmill.onclick = () => {
    if (gameData.budget > Wind.cost) gameData.budget -= Wind.cost;
    gameData.greenSupport += Wind.greenSupport;
    gameData.graySupport += Wind.graySupport;

    Buildings.build(new WindTurbine());
};

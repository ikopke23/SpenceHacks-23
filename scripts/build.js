import { gameData } from "./politics.js";
import Buildings, { FossilFuel, WindTurbine } from "./buildings.js";
import { UI } from './politics.js';

const Wind = {
    cost: 2000000,
    greenSupport: 5,
    graySupport: -5,
    ruralOpinion: 5,
};


const windmill = document.querySelector("#windmill");
windmill.onclick = () => {
    if (gameData.budget > Wind.cost) gameData.budget -= Wind.cost;
    gameData.greenSupport += Wind.greenSupport;
    gameData.graySupport += Wind.graySupport;
    gameData.sustainability += 1;

    UI();

    Buildings.build(new WindTurbine());
};

const Factory = {
    cost: 2000000,
    greenSupport: -10,
    graySupport: 10,
};

const fossil = document.querySelector("#fossil");
fossil.onclick = () => {
    if (gameData.budget > Factory.cost) gameData.budget -= Factory.cost;
    gameData.greenSupport += Factory.greenSupport;
    gameData.graySupport += Factory.graySupport;
    gameData.sustainability -= 1;
    gameData.unemployed -= 0.5;

    UI();

    Buildings.build(new FossilFuel());
};

// import getRuralOpinion from "./opinion.js";
// import getUrbanOpinion from "./opinion.js";
// import getSuburbanOpinion from "./opinion.js";
// import { graySupporters }  from "./opinion.js";
// import greenSupporters from "./opinion.js";

//player variables

export let gameData = {
    ruralOpinion: 0,
    solarOpinion: 0,
    urbanOpinion: 0,
    graySupport: 30,
    greenSupport: 30,
    budget: 1000000000,
    unemployed: 5,
};

let date = "Year 1 Month 1";


export function update() {
    gameData.budget += tax;
    // ruralOpinion = getRuralOpinion();
    // solarOpinion = getSuburbanOpinion();
    // uOp = getUrbanOpinion();
    // graySupport = graySupporters();
    // greenSupport = greenSupporters();
}



function UI(){
    //edit budget
    let budgetDisplay = document.getElementById("budget");
    budgetDisplay.innerText = "Budget = " + gameData.budget;
    //edit ruralOpinion
}
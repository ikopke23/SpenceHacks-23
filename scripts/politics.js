// import getRuralOpinion from "./opinion.js";
// import getUrbanOpinion from "./opinion.js";
// import getSuburbanOpinion from "./opinion.js";
// import { graySupporters }  from "./opinion.js";
// import greenSupporters from "./opinion.js";

//player variables

export let gameData = {
    ruralOpinion: 0,
    subOpinion: 0,
    urbanOpinion: 0,
    graySupport: 50,
    greenSupport: 50,
    budget: 1000000000,
    unemployed: 5,
    sustainability: 5
};

let date = "Year 1 Month 1";


export function update() {
    gameData.budget += tax;
    UI();
    // ruralOpinion = getRuralOpinion();
    // solarOpinion = getSuburbanOpinion();
    // uOp = getUrbanOpinion();
    // graySupport = graySupporters();
    // greenSupport = greenSupporters();
}



export function UI(){
    //edit budget
    const budgetDisplay = document.getElementById("budget");
    budgetDisplay.text = "Budget = " + gameData.budget;
    
    //edit unemployment
    const unem = document.getElementById('Unemployment');
    unem.text = "Unemployment = " + gameData.unemployment + "%";

    //edit unemployment
    const green = document.getElementById('greenSup');
    green.text = "Green Party Support = " + gameData.greenSupport;
    
    //edit unemployment
    const gray = document.getElementById('graySup');
    gray.text = "Gray Party support = " + gameData.graySupport;

    //edit sustainability
    const sustain = document.getElementById('sustainability');
    sustain.text = "Current Sustainability = " + gameData.sustainability;

}

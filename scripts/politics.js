import getRuralOpinion from'opinion.js';
import getUrbanOpinion from'opinion.js';
import getSuburbanOpinion from'opinion.js';
import graySupporters from'opinion.js';
import greenSupporters from'opinion.js';

//player variables 

let date = "Year 1 Month 1";

let rOp = 0;
let sOp = 0;
let uOP = 0;
let grayNum = 0;
let greenNum = 0;
let budget = 1000000000;
let party = "green"; /* or */ // "gray";
let unemployed = 5;

function update(){
    budget += tax;
    

    rOp = getRuralOpinion();
    sOp = getSuburbanOpinion();
    uOp = getUrbanOpinion();
    grayNum = graySupporters();
    greenNum = greenSupporters();


}


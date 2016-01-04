"use strict";

function noDefaultParameters(number){
    let internal_number = (number === undefined) ? 0 : number;

    console.log(internal_number);
}

noDefaultParameters();
noDefaultParameters(5);

function defaultParameters(number = 0){
    console.log(number);
}

defaultParameters();
defaultParameters(5);
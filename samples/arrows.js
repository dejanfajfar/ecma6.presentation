"use strict";

function arrayWalker(array, itemFunction){
    let retVal = [];
    for(let index = 0; index < array.length; index++){
        retVal.push(itemFunction(array[index]));
    }
    return retVal;
}

function addTwo(item){
    return item + 2;
}

const originalArray = [1, 2, 3, 4];

let withFunction = arrayWalker(originalArray, addTwo);

let withArrow = arrayWalker(originalArray, i => i * i);

console.log(originalArray);
console.log(withFunction);
console.log(withArrow);

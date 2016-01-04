"use strict";

function classicIteration(){
    let array = [1, 2, 3, 4, 5];

    for(let index = 0; index < array.length; index++){
        console.log(array[index]);
    }
}

function newIteration(){
    let array = [1, 2, 3, 4, 5];

    for(let item of array){
        console.log(item);
    }
}

classicIteration();
newIteration();
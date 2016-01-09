"use strict";

function generateRandomNumber(callback, onError){
    let generatedNumber = Math.random();
    if(generatedNumber > 0.5){
        onError(`GeneratedNumber ${generatedNumber} is to big`, generatedNumber);
    }
    else{
        callback(generatedNumber);
    }
}

generateRandomNumber(
    function(num){
        console.log(num);
    },
    function(message, num){
        console.error(message);
    });

function generateRandomNumberPromise(){
    return new Promise((resolve, reject) => {
        let generatedNumber = Math.random();
        if(generatedNumber > 0.5){
            reject(`GeneratedNumber ${generatedNumber} is to big`, generatedNumber);
        }
        else{
            resolve(generatedNumber);
        }
    })
}

let promise = generateRandomNumberPromise();

promise
    .then(num => console.log(num))
    .catch((message, num) => console.error(message));

/*
    Waiting for all promises to finish before continuing
 */

function randomWait(name){
    let sleepTime = Math.floor(Math.random() * 100);

    console.log(`${name} will wait for ${sleepTime}`);

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`${name} is done`);
            resolve(name);
        }, sleepTime);
    });
}

Promise.all([randomWait("sleeper1"), randomWait("sleeper2"), randomWait("sleeper3")]).then(() => {
    console.log("All sleepers are done");
});

/*
    Take the first promise that resolves
 */

Promise.race([
    randomWait("Dasher"),
    randomWait("Dancer"),
    randomWait("Prancer"),
    randomWait("Vixen"),
    randomWait("Comet"),
    randomWait("Cupid"),
    randomWait("Donner"),
    randomWait("Blitzen")
]).then((winner) => {
    console.log(`== The winner is ${winner}`);
});
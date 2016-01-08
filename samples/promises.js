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
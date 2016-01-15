"use strict";

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

/*
    Working relay race sample
*/

Promise.race([
    randomWait("01").then(name => randomWait("02")).then(name => Promise.resolve("Team1")),
    randomWait("11").then(name => randomWait("12")).then(name => Promise.resolve("Team2"))
])
.then(name => console.log(`Team ${name} has won the relay race`));

/*
    Loading images like sample with promises
*/

Promise.all([
    randomWait("Image01").then(image => console.log(`Rendering image ${image}`)),
    randomWait("Image02").then(image => console.log(`Rendering image ${image}`)),
    randomWait("Image03").then(image => console.log(`Rendering image ${image}`))
])
.then(name => console.log("All images loaded"));

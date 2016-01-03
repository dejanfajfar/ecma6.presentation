"use strict";

let what = "pot bay doors";
let who = "Hall";

let concatenatedMessage = "Open the " + what + ", please " + who;

let templateStringMessage = `Open the ${what}, please ${who}`;

console.log(concatenatedMessage);
console.log(templateStringMessage);
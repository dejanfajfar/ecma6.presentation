/*
* To enable rest parameters on nodeJS start the sample with
*
* node --harmony_rest_parameters rest_parameters.js
 */

function addPersonClassic(name, surname, tags){
    console.log(`Added classic user with name : ${name}, surname : ${surname} and tags : ${tags}`);
}

function addPerson(name, surname, ...tags){
    console.log(`Added user with name : ${name}, surname : ${surname} and tags : ${tags}`);
}

addPersonClassic("John", "Doh");
addPersonClassic("The", "Doctor", ["Timelord", "Two hearts", "Generation 13"]);
addPersonClassic("Malcolm", "Reynolds", ["Captain", "Serenity", "Honorable"]);

addPerson("John", "Doh");
addPerson("The", "Doctor", "Timelord", "Two hearts", "Generation 13");
addPerson("Malcolm", "Reynolds", "Captain", "Serenity", "Honorable");
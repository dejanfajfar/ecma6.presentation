"use strict";
/*
 * To enable destructuring on nodeJS start the sample with
 *
 * node --harmony_destructuring destructuring.js
 */

function printAB(a, b){
    console.log(`a : ${a}, b : ${b}`);
}

let array = [1, 2];

// No destructuring
{
    let a = array[0];
    let b = array[1];

    printAB(a, b);
}

// With destructuring
{
    let [a, b] = array;

    printAB(a, b);
}

// Multiple return values

function foo(){
    return ["first", "last"];
}

{
    let [a, b] = foo();

    printAB(a, b);
}

// Ignore some return values

function bar(){
    return [1, 2, 3];
}

{
    let [a, , b] = bar();

    printAB(a, b);
}

// Object destructuring

function objectiveFoo(){
    return {
        name: "Jessica",
        surname: "Jones",
        nemesis: "purple man"
    }
}

{
    let {name, surname} = objectiveFoo();

    printAB(name, surname);
}
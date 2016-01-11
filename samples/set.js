"use strict";

let array = [];

array.push(1);
array.push(2);
array.push(3);

console.log(array);

let set = new Set();

set.add(1);
set.add(2);
set.add(3);

console.log(set);

set.delete(2);

console.log(set);

console.log(set.has(2));

set.add(2);

console.log(set);

/*
    Converting between arrays and sets and vice versa
 */

let mySet = new Set([1,2,3,4]);

console.log(mySet);

let myArray = [...mySet];

console.log(myArray);
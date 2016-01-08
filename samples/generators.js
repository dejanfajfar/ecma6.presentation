"use strict";

function* ticketNumberGenerator(){
    let lastTicketNumber = 1;
    while(true) {
        yield lastTicketNumber++;
    }
}

let ticketCounter = ticketNumberGenerator();

console.log(ticketCounter.next());
console.log(ticketCounter.next());
console.log(ticketCounter.next());
console.log(ticketCounter.next());
console.log(ticketCounter.next());

function rollDice(){
    return Math.floor(Math.random() * (6 - 2)) + 1;
}

/*
    Pagination
 */
function* paginator(){
    let arrayLength = 100;
    let pageSize = 10;
    let dataSource = Array.apply(null, {length: arrayLength}).map(Number.call, Number);

    while(dataSource.length > 0){
        yield Array.apply(null, {length: pageSize}).map(() => dataSource.shift());
    }
}

let generator = paginator();

while(true){
    let iteration = generator.next();
    if(iteration.done){
        break;
    }
    console.log("---");
    console.log(iteration.value);
    console.log("---");
}

/*
    Use yield as a communication channel
 */

function* channel () {
    var name = yield 'hello, what is your name?';
    return 'well hi there ' + name
}
var gen = channel();
console.log(gen.next().value);
console.log(gen.next('billy'));

/*
    Fibonacci generator
 */

function* fibGen () {
    var current = 0, next = 1, swap;
    while (true) {
        swap = current, current = next;
        next = swap + next;
        yield current
    }
}
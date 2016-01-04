"use strict";

function fancyPrint(one, two, three){
    console.log(`one => ${one}, two => ${two}, three => ${three}`);
}

let array = [1, 2, 3];

fancyPrint(array[0], array[1], array[2]);
fancyPrint(...array);

fancyPrint(...["one", "two", "three"]);
fancyPrint();
fancyPrint(...[1, 2]);
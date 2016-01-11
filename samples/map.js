"use strict";

/*
    Before Maps were introduced to the language the only alternative was to use objects

    Note: Some samples in this demonstration use deconstruction to work so the sample file has to be started with

    $ node --harmony_destructuring map.js
 */

let mapObject = {};

mapObject["name"] = "John";
mapObject["surname"] = "Doh";

console.log(mapObject["name"]);
console.log(mapObject["surname"]);


let map = new Map();
map.set("name", "John");
map.set("surname", "Doh");

// One of the numerous advantages of using a Map object is that it can be iterated.
for(let value of map.values()){
    console.log(value);
}

map.forEach(([key, value]) => console.log(value));

/*
    Using non strings and keys
 */

let keyString = "key";
let keyObject = {};
let keyFunction = function(){};

map = new Map();

map.set(keyString, "value1");
map.set(keyObject, "value2");
map.set(keyFunction, "value3");

console.log(map.size);

for(let value of map.values()){
    console.log(value);
}

/*
    Weak maps

    Maps were the key can only be a reference object (no value type)
 */

let weakMap = new WeakMap();

try{
    weakMap.set("sdf", "sdsd");
}catch(err){
    console.log(`ERROR: ${err.message}`);
}

weakMap.set(keyObject, 42);
weakMap.set(keyFunction, 43);
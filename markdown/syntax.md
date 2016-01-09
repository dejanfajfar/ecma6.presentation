# Syntax

---

* Template strings
* for..of
* Default parameters
* Spread parameters
* Rest parameters
* Deconstructing 

---

## Template strings

---

<pre>
<code class="language-javascript">
let what = "pot bay doors";
let who = "Hall";

let concatenatedMessage = "Open the " + what + ", please " + who;

console.log(concatenatedMessage);
</code
</pre>

---

<pre>
<code class="language-javascript">
let what = "pot bay doors";
let who = "Hall";

let templateStringMessage = `Open the ${what}, please ${who}`;

console.log(templateStringMessage);
</code
</pre>

---

## for...of

---

<pre>
<code class="language-javascript">
let array = [1, 2, 3, 4, 5];

for(let index = 0; index < array.length; index++){
	console.log(array[index]);
}
</code>
</pre>

---

<pre>
<code class="language-javascript">
let array = [1, 2, 3, 4, 5];

for(let item of array){
	console.log(item);
}
</code>
</pre>

---

## Default parameters

---

<pre>
<code class="language-javascript">
function noDefaultParameters(number){
    let internal_number = (number === undefined) ? 0 : number;

    console.log(internal_number);
}

noDefaultParameters();
noDefaultParameters(5);
</code
</pre>

---

<pre>
<code class="language-javascript">
function defaultParameters(number = 0){
    console.log(number);
}

defaultParameters();
defaultParameters(5);
</code
</pre>

---

## Spread parameters

---

<pre>
<code class="language-javascript">
function fancyPrint(one, two, three){
    console.log(`one => ${one}, two => ${two}, three => ${three}`);
}

let array = [1, 2, 3];

fancyPrint(array[0], array[1], array[2]);
</code
</pre>

---

<pre>
<code class="language-javascript">
function fancyPrint(one, two, three){
    console.log(`one => ${one}, two => ${two}, three => ${three}`);
}

let array = [1, 2, 3];

fancyPrint(...array);
</code
</pre>

---

## Rest parameters

---

<pre>
<code class="language-javascript">
function addPersonClassic(name, surname, tags){
    console.log(`Added classic user with name : ${name}, surname : ${surname} and tags : ${tags}`);
}

addPersonClassic("John", "Doh");
addPersonClassic("The", "Doctor", ["Timelord", "Two hearts", "Generation 13"]);
addPersonClassic("Malcolm", "Reynolds", ["Captain", "Serenity", "Honorable"]);
</code
</pre>

---

<pre>
<code class="language-javascript">
function addPerson(name, surname, ...tags){
    console.log(`Added user with name : ${name}, surname : ${surname} and tags : ${tags}`);
}

addPerson("John", "Doh");
addPerson("The", "Doctor", "Timelord", "Two hearts", "Generation 13");
addPerson("Malcolm", "Reynolds", "Captain", "Serenity", "Honorable");
</code
</pre>

---

## Destructuring

---

<pre>
<code class="language-javascript">
function printAB(a, b){
    console.log(`a : ${a}, b : ${b}`);
}

let array = [1, 2];

let a = array[0];
let b = array[1];

printAB(a, b);
</code
</pre>

---

<pre>
<code class="language-javascript">
function printAB(a, b){
    console.log(`a : ${a}, b : ${b}`);
}

let array = [1, 2];

let [a, b] = array;

printAB(a, b);
</code
</pre>

---

### Works with objects too

---

<pre>
<code class="language-javascript">
function foo(){
    return {
        name: "Jessica",
        surname: "Jones",
        nemesis: "purple man"
    }
}

let person = foo();

let name = person.name;
let surname = person.surname;

// do stuff with name and surname
</code
</pre>

---

<pre>
<code class="language-javascript">
function foo(){
    return {
        name: "Jessica",
        surname: "Jones",
        nemesis: "purple man"
    }
}

let {name, surname} = foo();

// do stuff with name and surname
</code
</pre>
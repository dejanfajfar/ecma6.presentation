# Syntax

---

## let

---

<pre>
<code class="language-javascript">
var x = 0;
{
	var x = 5;
	console.log(x - 3);
}
console.log(x);
</code
</pre>

---

<pre>
<code class="language-javascript">
let x = 0;
{
	let x = 5;
	console.log(x - 3);
}
console.log(x);
</code
</pre>

---

## const

---

<pre>
<code class="language-javascript">
let const_answer = 42;
// the most amazing code in the world
const_answer = 43
// some more amazing code
console.log(const_answer);
</code
</pre>

---

<pre>
<code class="language-javascript">
const const_answer = 42;
// the most amazing code in the world

// TypeError: Assignment to constant variable
const_answer = 43
// some more amazing code
console.log(const_answer);
</code
</pre>

---

## Arrow functions

---

<pre>
<code class="language-javascript">
function arrayWalker(array, itemFunction){
    let retVal = [];
    for(let index = 0; index < array.length; index++){
        retVal.push(itemFunction(array[index]));
    }
    return retVal;
}

function addTwo(item){
    return item + 2;
}

console.log(
	arrayWalker([1, 2, 3, 4], addTwo)
);
</code
</pre>

---

<pre>
<code class="language-javascript">
function arrayWalker(array, itemFunction){
    let retVal = [];
    for(let index = 0; index < array.length; index++){
        retVal.push(itemFunction(array[index]));
    }
    return retVal;
}

console.log(
	arrayWalker([1, 2, 3, 4], i => i + 2)
);
</code
</pre>

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
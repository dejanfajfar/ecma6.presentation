# Function

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
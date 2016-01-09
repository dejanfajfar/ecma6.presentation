# Bindings

---

* let
* const

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
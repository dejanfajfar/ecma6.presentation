# Syntax

---

## Default parameters

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


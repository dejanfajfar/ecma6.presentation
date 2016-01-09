# Build in

---

* Promises
* Map
* Set
* Symbols

---

## Promises

---

<pre>
<code class="language-javascript">
function generateRandomNumber(callback, onError){
    let generatedNumber = Math.random();
    if(generatedNumber > 0.5){
        onError(`GeneratedNumber ${generatedNumber} is to big`, generatedNumber);
    }
    else{
        callback(generatedNumber);
    }
}

generateRandomNumber(
    function(num){
        console.log(num);
    },
    function(message, num){
        console.error(message);
    });
</code>
</pre>

---

<pre>
<code class="language-javascript">
function generateRandomNumberPromise(){
    return new Promise((resolve, reject) => {
        let generatedNumber = Math.random();
        if(generatedNumber > 0.5){
            reject(`GeneratedNumber ${generatedNumber} is to big`, generatedNumber);
        }
        else{
            resolve(generatedNumber);
        }
    })
}

let promise = generateRandomNumberPromise();

promise
    .then(num => console.log(num))
    .catch((message, num) => console.error(message));
</code>
</pre>

---

### Pyramid of doom!

---

<pre>
<code class="language-javascript">
pan.pourWater(function(){
	range.bringToBoil(function(){
		range.lowerHeat(function(){
			pan.addRice(function(){
				setTimeout(function(){
					range.turnOff();
					serve();
				}, 15 * 60 * 1000);
			});
		});
	});
});
</code>
</pre>

---

<pre>
<code class="language-javascript">
pan.pourWater()
	.then(range.bringToBoil()
	.then(range.lowerHeat())
	.then(pan.addRice())
	.then(setTimeout(function(){
			range.turnOff();
			serve();
		}, 15 * 60 * 1000));
</code>
</pre>

---

<pre>
<code class="language-javascript">
Promise.all([longOperation(), longOperation(), longOperation()])

Promise.race([longOperation(), longOperation(), longOperation()])
</code>
</pre>

---

## Map

---
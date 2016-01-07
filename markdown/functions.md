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
</code>
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
</code>
</pre>

---

## Classes

---

<pre>
<code class="language-javascript">
function Person(name){
    this.name = name;
}

Person.prototype.say_hello = function(){
    console.log(`Hello ${this.name}`);
};

let john = new Person("John");

john.say_hello();
</code>
</pre>

---

<pre>
<code class="language-javascript">
class Person{
    constructor(name){
        this.name = name;
    }

    say_hello(){
        console.log(`Hello ${this.name}`);
    }
}

let john = new ClassPerson("John");

john.say_hello();
</code>
</pre>

---

### Inheritance

---

<pre>
<code class="language-javascript">
function TeamLead(name, team){
    this.team = team;
    Person.call(this, name)
}

TeamLead.prototype = new Person();

TeamLead.prototype.callingCard = function(){
    console.log(`I am ${this.name} leader of team ${this.team}`);
};

let bigKahuna = new TeamLead("Morty", "The pacific paw");

bigKahuna.say_hello();
bigKahuna.callingCard();
</code>
</pre>

---

<pre>
<code class="language-javascript">
class TeamLead extends Person{
    constructor(name, team){
        super(name);
        this.team = team
    }

    callingCard(){
        console.log(`I am ${this.name} leader of team ${this.team}`);
    }
}

let bigKahuna = new TeamLead("Morty", "The pacific paw");

bigKahuna.say_hello();
bigKahuna.callingCard();
</code>
</pre>
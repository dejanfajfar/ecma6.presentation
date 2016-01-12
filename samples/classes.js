"use strict";

function Person(name){
    this.name = name;
}

Person.prototype.say_hello = function(){
    console.log(`Hello ${this.name}`);
};

let john = new Person("John");

john.say_hello();


class ClassPerson{
    constructor(name){
        this.name = name;
    }

    say_hello(){
        console.log(`Hello ${this.name}`);
    }
}

let bill = new ClassPerson("Bill");

bill.say_hello();


/*
    Inheritance
 */

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

class ClassTeamLead extends ClassPerson{
    constructor(name, team){
        super(name);
        this.team = team;
    }

    callingCard(){
        console.log(`I am ${this.name} leader of team ${this.team}`);
    }
}

let tinyTim = new ClassTeamLead("Tim", "The sleeping dragon");

tinyTim.say_hello();
tinyTim.callingCard();
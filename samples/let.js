"use strict";

function varScope(){
    var x = 0;
    {
        var x = 5;
        console.log(x - 3);
    }
    console.log(x);
}

function letScope(){
    let x = 0;
    {
        let x = 5;
        console.log(x - 3);
    }
    console.log(x);
}


varScope();
letScope();
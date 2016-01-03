"use strict";

function constDeclaration(){
    const x = 5;

    console.log(x);
}

function constReassign(){
    const x = 5;

    try {
        x = 6;
    }catch (err){
        console.log(`Reassigning a constant causes ${err}`);
    }
}

function constantScope(){
    let x = 0;
    {
        const x = 5;
        console.log(x - 3);
    }
    console.log(x);
}

constDeclaration();
constReassign();
constantScope();
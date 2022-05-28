/*************1 Feature of ECMAScript 2015 also known as ES6****************/
// LET VS CONST VS VAR

// var => function scope
// let and const => block scope

/*var myName = "Narc Tech"
console.log(myName);

myName = "Sachin"
console.log(myName);*/

/*let myName = "Narc Tech"
console.log(myName);

myName = "Sachin"
console.log(myName);*/

/*
const myName = "Narc Tech"
console.log(myName);

myName = "Sachin"
console.log(myName);
*/

/*function biodata(){
    let myFirstName = "Sachin";
    console.log(myFirstName);

    if(true){
        let myLastName = "Singh"
        console.log('inner ' + myLastName);
        console.log('inner ' + myFirstName);
    }
    console.log('innerOuter ' + myLastName);
}

biodata();*/


/***************2 Template literals (Template strings)**********************/

/*
for(let num = 1; num<=10; num++){
    let tableOf = 12;
    //console.log(tableOf + "*" + num + " = " + tableOf * num);
    console.log(`${tableOf} * ${num} = ${tableOf* num}` );
}
*/

/************************3 Default Parameters*******************************/
// Default function parameters allow named parameters to be
// initialized with defauld values if no value or undefined
// is passed.

/*
function multi(a,b=5){
    return a*b;
}

console.log(multi(5));
*/

/************************6 Fat Arrow Function*******************************/

//Normal way of writing function

/*console.log(sum());

function sum(){
    let a = 5;b = 6;
    let sum = a+b;
    return `The sum of two number is ${sum}`
}*/

// How to convert in into Fat Arrow Function


const sum =()=> `The sum of two number is ${(a=5)+(b=6)}`

console.log(sum());
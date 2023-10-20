//! Function Statement / Function Declaration  - 
function a(){
    console.log("Calling Function Statement - a");
}
// a();

// --------------------------------------------------------------------------------------------//

//! Function Expression - 
const b = function(){
    console.log("Calling Function Expression - b");
}

a();
b();

//  NOTE -----------> DIFFERENCE BETWEEN THEM IS FUNCTION STATEMENT AND DECLARATION IS , 
//                    FUNCTION STATEMENT CAN HOISTED , BUT FUNCTION DECLARATION CANNOT. 

// --------------------------------------------------------------------------------------------//

//! Anonymous Function - 
//  The function having no name is known as anonymous function - they used as functions
//   are  used as a values

var c = function(){
    console.log("Calling Anonymous Function - c");
}
c();

// --------------------------------------------------------------------------------------------//

//! Named Function - 

var d = function xyz (){
    console.log("Calling Named Function - d");
    console.log(xyz);
}
// xyz(); -------------------------> Here we get an Error because it is not declare globaly
//                                   But in line Node. 37 we can     
d();

// --------------------------------------------------------------------------------------------//

//! CallBack Function - It is a function passed as an argument into another function, and executed/invoked 
//!                     when its outer function is executed.

setTimeout(function(){
    console.log("This is Callback Function ------> Hiiiiiiii..........!!!!!!!!!!");
},5000)

function x(y){
    y();
    console.log("This is Callback Function ------> first");
    y();
}

 x(function y(){
     console.log("This is Callback Function ------> Second");  
 })


// --------------------------------------------------------------------------------------------//

//! Currying - It is a function which takes multiple arguments into series of function 
//!            and each function will take single argument.

function add(a){
    return function(b){
        return function(c){
            return a+b+c;
        }
    }
}

console.log("This is Currying Function ------> " + add(2)(3)(5));

// --------------------------------------------------------------------------------------------//

//! Higher Order Function - It is a function which takes one or more function as an input and 
//!                         returns function as output.

function multiply(x){
    return function(y){
        return x*y;
    }
}

const product = multiply(2);
console.log(product(3));

// --------------------------------------------------------------------------------------------//

//! Generator Function - It is a function which can paused middle of execution and resume later.

// NOTE -----------> 1. it can be written as " function* ".
//                   2. "yield "keyword is used to pause the function and return a value.


function* generateSequence(){
    yield 1;
    yield 2;
    yield 3;
}

const sequence = generateSequence();

console.log(sequence.next().value);
console.log(sequence.next().value);
console.log(sequence.next().value);
console.log(sequence.next().value);

// --------------------------------------------------------------------------------------------//

// Factory Function - It is a function which creates a instance of a objects having same properties 
//                   and methods as Factory function and you can create these objects without using 
//                    "NEW KEYWORD".

function information(name , age , gender){
    return {
        name : name,
        age : age ,
        gender : gender,

        sayHi : function(){
            console.log(`My name is ${this.name} and my age is ${this.age}`)
        }
    }
}

const Person1 = information("Arpita", 25 , "Female");
const Person2 = information("Ram" , 50 , "Male");

Person1.sayHi();
Person2.sayHi();
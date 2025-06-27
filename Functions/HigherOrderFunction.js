//!  A function takes " another function " as argument or " returns a function " is call "Higher order Function" .


//^  Example 1: ------------> Passing a function as an argument

function greet(name) {
    return `Hi!! My name is ${name}.`
}

function higherOrderFunc(callback) {
    console.log("its higher order function -----> ", callback("Arpita"));
}

higherOrderFunc(greet);    //----------------------> higherOrderFunc is Higher order Function. 


//^  Example 1: ------------> Returning Function  

function multiply(x) {
    return function (y) {
        console.log("returning a function ----> ", y * x);
    }
}

const ans = multiply(2);
ans(23);
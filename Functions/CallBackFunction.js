//!    A callback function is a function that is passed as an argument to another function 
//!    and is called later after some work is done.

//! Callback Hell ----------------------> when we nested so many callbacks one inside another this is happens.

//~ NOTE ---------------------------> Issue with callback is - 
//*                                   1. Callback Hell
//*                                   2. Inversion of control.



// Example 1).
function main(param) {
    console.log("from inside main function");
    param();
}

main(function callbackFunc() {
    console.log("inside call back function")
})


// Example 2).
function greet(name, callback) {
  console.log("Hi " + name);
  callback();
}

function sayBye() {
  console.log("Goodbye!");
}

greet("Arpita", sayBye);



// Example 3).
setTimeout(()=>{
console.log("from inside settimeout!")
},5000)

function x(y){
    console.log("hiiiii");
    y();
}

x(()=>{
    console.log("Hellooooooo");
})
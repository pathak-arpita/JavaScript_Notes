//!    A callback function is a function that is passed as an argument to another function 
//!    and is called later after some work is done.


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
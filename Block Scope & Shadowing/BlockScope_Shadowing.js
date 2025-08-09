//* Block scope refers to the scope of variables defined using let or const inside a block ({}), 
//* meaning they are only accessible within that block and not outside of it.

//! var --------------> 

var x = 10;
{
    console.log("x inside on top of another declaration block -----> ", x);
    var x = 100;
    console.log("x inside block -----> ", x);
}
console.log("x outside block -----> ", x);

// OUTPUT ----------------> 
// x inside on top of another declaration block ----->  10
// x inside block ----->  100
// x outside block ----->  100

//^ Because var variable don't have block scope.





//! let & const --------------> 

//* Shadowing happens when a variable declared in an inner scope (like a block or function) 
//* has the same name as one in an outer scope.
//* The inner variable "shadows" or hides the outer one within its scope.

let y = 20;
{
    let y = 200;
    console.log("y inside block -----> ", y);
}
console.log("y outside block -----> ", y);


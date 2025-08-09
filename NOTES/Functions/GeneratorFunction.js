//! Generator Function --------------> It is a function which can paused middle of execution and resume later.

//* NOTE -----------> 1. it can be written as " function* ".
//*                   2. "yield "keyword is used to pause the function and return a value.
//*                   3. Used in  pagination or streaming data.


function* generator_Function() {
    yield 1;
    yield 2;
    yield 3;
}

const generator = generator_Function();
console.log("returning 1 -----> ", generator.next().value);
console.log("returning 2 -----> ", generator.next().value);
console.log("returning 3 -----> ", generator.next().value);
console.log("returning undefined -----> ", generator.next().value);
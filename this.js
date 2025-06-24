//& NOTE -----------> " THIS KEYWORD " WORKS DIFFERNTLY IN STRICK MODE AND NON-STRICK MODE.

"use strict";
//! Global Scope ---------------------------->

console.log(this);
//OUTPUT --------> window

//~ In javascript "this keyword" refres to the global object and it can be difernt based on where your running js code
//~ In browser it refers to window object & in node its global object etc.

//---------------------------------------------------------------------------------------------//

//! Inside the function ---------------------------->
function x() {
    // value of this keyword will be different based on strick mode or non-strick mode.
    console.log("this inside x function ----->", this);
}

x();

//OUTPUT --------> 1. window (Non-strict mode)
//                 2. undefined (Strict mode)


//~ IN STICK MODE "THIS KEYWORD" USE "THIS SUBSTITUTION" PHENOMENON.
//~ IN NON- STRICK MODE -------> IF THE VALUE OF THIS KEYWORD IS UNDEFINED OR NULL IT WILL REPLCAE IT WITH THE GLOBAL OBJECT.

//---------------------------------------------------------------------------------------------//

//! "This keyword" value is depends on how the function is called ---------------------------->

function y() {
    console.log("this inside y function ----->", this);
}

y(); // OUTPUT --------> window (Non-strict mode) or undefined (Strict mode)
window.y(); // OUTPUT --------> window

//---------------------------------------------------------------------------------------------//

//! Inside the Object ---------------------------->

const obj = {
    a: 10,
    // x is the methid of the object
    x: function () {
        console.log("this inside x function of obj ----->", this);
        console.log("value of a ----->", this.a);
    }
}

obj.x(); // OUTPUT --------> obj

//---------------------------------------------------------------------------------------------//

//! Call , Apply and Bind ----------------------------> by using them we can update the value of "this keyword".

const student_1 = {
    name: "arpita",
    printName: function () {
        console.log("this inside printName function ----->", this.name);
    }
}

const student_2 = {
    name: "suman",
}

// Using call method
student_1.printName.call(student_2); // OUTPUT --------> suman

// Using apply method
student_1.printName.apply(student_2); // OUTPUT --------> suman     

// Using bind method
const printName_2 = student_1.printName.bind(student_2);
printName_2(); // OUTPUT --------> suman

//---------------------------------------------------------------------------------------------//

//! Arrow Fuctions ---------------------------->  Arrow functions do not have their own "this" context, they inherit "this" from the parent scope.

const obj_arrowFuction = {
    x: 20,
    y: () => {
        console.log("this inside y function of obj_arrowFuction ----->", this);
    }
}

obj_arrowFuction.y(); // OUTPUT --------> window

// Nested Arrow Function ------>
//^ 1.
const obj_nestedArrowFunction = {
    x: 30,
    y: function () {
        const z = () => {
            console.log("this inside nested arrow function ----->", this);
        }
        z();
    }
}
obj_nestedArrowFunction.y(); // OUTPUT --------> obj_nestedArrowFunction

//^ 2.
const obj_nestedArrowFunction2 = {
    x: 30,
    y: () => {
        const z = () => {
            console.log("this inside nested arrow function - example 2 ----->", this);
        }
        z();
    }
}
obj_nestedArrowFunction2.y(); // OUTPUT --------> window

//---------------------------------------------------------------------------------------------//

//! Inside Dom ----------------------------> IT REFRNCE TO HTML ELEMENTS.

//---------------------------------------------------------------------------------------------//
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
    console.log("this inside x function ----->",this);
}

x();

//OUTPUT --------> 1. window (Non-strict mode)
//                 2. undefined (Strict mode)


//~ IN STICK MODE "THIS KEYWORD" USE "THIS SUBSTITUTION" PHENOMENON.
//~ IN NON- STRICK MODE -------> IF THE VALUE OF THIS KEYWORD IS UNDEFINED OR NULL IT WILL REPLCAE IT WITH THE GLOBAL OBJECT.

//---------------------------------------------------------------------------------------------//

//! "This keyword" value is depends on how the function is called ---------------------------->

function y() {
    console.log("this inside y function ----->",this);
}

y(); // OUTPUT --------> window (Non-strict mode) or undefined (Strict mode)
window.y(); // OUTPUT --------> window

//---------------------------------------------------------------------------------------------//
//!  Currying --------------> It is a function which takes multiple arguments into series of function 
//!                           and each function will take single argument.

//^ By using Closure --------------->
//* 1).
function add(x) {
    return function (y) {
        return x + y;
    }
}

const ans = add(5);
console.log("ans-------> ", ans(5))


//* 2).
const multiply = function (x) {
    return function (y) {
        return function (z) {
            return x * y * z
        }
    }
}

console.log("multiply -----> ", multiply(2)(3)(5));




//^ By using Bind --------------->

function subtraction(x , y) {
    return x - y;
}

const subtraction_ans = subtraction.bind(this, 10);
console.log("subtraction --------> ", subtraction_ans(3));
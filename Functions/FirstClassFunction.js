/*
     function func(param_1 , param_2) {

     }

     func(arg_1 , arg_2);
*/


//! Function Statement / Function Declaration --------------->
function function_statement() {
    console.log("function_statement -------> This is how we write a function statement.");
}

function_statement();



//! Function Expression --------------->
//* Assigning a function as a value to a variable.

var function_expression = function () {
    console.log("function_expression -------> This is how we write a function expression.");
}

function_expression();

// NOTE ---------------------------->
//^ The difference between a "Function Statement" and a "Function Expression" is:
//^ Function Statement -------> gets hoisted
//^ Function Expression -------> does NOT get hoisted



//! Anonymous Function --------------->
//* A function without a name is called an anonymous function.
//* They are used when functions are treated as values.

var anonymous_function = function () {
    console.log("anonymous_function -------> This is how we write an anonymous function expression.");
}

anonymous_function();

/*
     function () {

     }

     This is technically an anonymous function, but JavaScript throws an error:
     SyntaxError: Function statements require a function name.
*/



//! Named Function Expression --------------->
var named_function = function func() {
    console.log("named_function -------> This is how we write a named function expression.");
    console.log("func ----->", func);
}

named_function();
//* func() ------------> If we try to call func() directly, we will get an error because it's not 
//*                      defined globally. However, it can be used inside its own function body.



//! First Class Function /First Class Citizens --------------->
//*  A first-class function is a function treated like any other variable — it can be assigned to a variable, passed as an argument, or returned from another function.

//^ Retuning function  ---------->
var returning_function_inside_function = function(){
    return function(){
        return("returning_function_inside_function -------> returning from first_class_func.");
    }
}

const ans = returning_function_inside_function();
console.log("ans ------> " , ans())


//^ passing function as parameter ---------->
function passingFunc() {
    return("passing function as parameter");
}

var first_class_func = function (param) {
    console.log("first_class_func -------> ", param());
}

first_class_func(passingFunc);

// Hoisting --------------------->  Hoisting is the default behavior of moving all the
//                              declarations at the top of the scope before code execution.

// 1.
x = 5;
var x;
console.log(x); // -------------------------> OUTPUT - 5;

//  NOTE -----------> 1.  Only VAR variable and normal function is hoisted;
//                    2.  LET and CONST variables are hoisted but they are NOT accessible 
//                       because they are move into Temporary Dead Zone

// --------------------------------------------------------------------------------------------//

// 2.
console.log(y); 
var y; 
y = 5; // -------------------------> OUTPUT - UNDEFINED;

// --------------------------------------------------------------------------------------------//

// 3.
function func(){
  console.log('Function is Hoisted');
}

func(); // -------------------------> OUTPUT - Function is Hoisted;

// --------------------------------------------------------------------------------------------//

// 4.

func1(); // -------------------------> OUTPUT - Function 1 is Hoisted;

function func1(){
  console.log('Function 1 is Hoisted');
}

// --------------------------------------------------------------------------------------------//

//  5.

var z = function (){
  console.log('Function is Anonymous Function');
}

z(); // -------------------------> OUTPUT - Function is Anonymous Function;

// --------------------------------------------------------------------------------------------//

//  6.

func2(); // -------------------------> OUTPUT - TypeError;

var func2 = function (){
  console.log('Function 2 is Anonymous Function');
}



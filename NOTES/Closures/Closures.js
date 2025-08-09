//! Closures --------------->  A closure is the combination of a function bundled together 
//!                            with references to its lexical environment.

// Example 1).
function outerFunction() {
    var x = 1000;
    function innerFunction() {
        console.log(x);
    }
    innerFunction();
}
outerFunction();

// Example 2).
function outest() {
    var c = 'boring!'
    function Outer(b) {
        function inner() {
            console.log(a, b, c);
        }
        var a = 'hello';
        inner();
    }
    Outer('world');
}
outest();

// NOTE --------------------> Closures are used for //! Data hiding and Encapsulation.

//! Data hiding in Closures ---->

function counter() {
    var num = 0;
    return function incrementCounter() {
        num++;
        console.log(num);
    }

}
var counter1 = counter();
counter1();
counter1();



//*---------------------------------------------------------------------------------------------*//

//! QUE). PRINT 1 TO 5 DATA AFTER PARTICULAR DELAY USING LET AND VAR ------------->

//^ using let -------->

function x() {
    for (let i = 0; i <= 5; i++) {
        setTimeout(() => {
            console.log("i from let ----> ", i);
        }, i * 1000)
    }
}

x();



//^ using var -------->

function y() {
    for (var i = 0; i <= 5; i++) {
        function closure(val_i) {
            setTimeout(() => {
                console.log("i from var  ----> ", val_i);
            }, val_i * 1000)
        }
        closure(i);
    }
}

y();
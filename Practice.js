function outer() {
    function inner() {
        console.log("x consoling from inner function --> ", x);
    }
    inner();
}

outer();
var x = 10;

function outerFunction() {
    let outerVar = 'I am outer';
    return function innerFunction() { console.log(outerVar); }
}

const ans = outerFunction()();
 console.log("ans --> ", ans);
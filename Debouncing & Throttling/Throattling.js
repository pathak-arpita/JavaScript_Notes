//! Throttling ---------------------------->
//* Calls a function at regular intervals, no matter how many times the event is triggered. 

let count = 0;
function getCountInsideThrottle() {
    console.log("count inside getCountInsideThrottle --------> ", count++);
}

const throttling = function (fn, delay) {
    let timer;
    return function (...args) {
        if (!timer) {
            fn.apply(this, args);
            timer = setTimeout(() => {
                timer = null;
            }, delay)
        }
    }
}


const reSize_Screen = throttling(getCountInsideThrottle, 1000);
window.addEventListener("resize", reSize_Screen);
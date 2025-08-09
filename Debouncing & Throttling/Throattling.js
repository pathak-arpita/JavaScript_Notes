//! Throttling ---------------------------->
//* Calls a function at regular intervals, no matter how many times the event is triggered. 

let count = 0;
function getCountInsideThrottle() {
    console.log("count inside getCountInsideThrottle --------> ", count++);
}

const throttling = function (fn, delay) {
    let flag = true;
    return function () {
        let context = this;
        let args = arguments;
        if (flag) {
            fn.apply(context, args);
            flag = false;
            setTimeout(() => {
                flag = true;
            }, delay)
        }
    }
}


const reSize_Screen = throttling(getCountInsideThrottle, 1000);
window.addEventListener("resize", reSize_Screen);
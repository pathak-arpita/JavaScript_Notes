//! Debouncing ---------------------------->
//* Debouncing refers to calling a function only when the time gap between two events (like keystrokes) exceeds a specified delay.
//* It helps prevent the function from being called too often, which can lead to poor performance and unexpected behavior.


//! Debouncing V/S Throttling --------------------->

//^ Debounce is most suitable for control events like typing or button clicks. 
//^ Throttle is most suitable for continuous user events like resizing and scrolling.

//^ In Debouncing if difference between two keypress is xyz then do function call;
//^ In throttling  make call to the function after xyz time;


let count = 0;
function getCountFromDebouncing() {
    console.log("inside the getCountFromDebouncing --------> ", count++)
}

const debouncing = function (fn, delay) {
    let timer ; 
    return function () {
        let context = this;
        args = arguments;
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(context, args);
        }, delay)
    }
}

const fetchingData = debouncing(getCountFromDebouncing, 1000);

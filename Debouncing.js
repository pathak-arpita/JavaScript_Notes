// Debouncing ---------------------------->
// debouncing is nothing but calling function after perticular period of time. The purpose of it is 
// to prevent calling function to often , which can lead to poor performance and unexpected behaviour.

let counter = 0;
function getData(){
    console.log("Fetching data...."+ counter++);
}

const debouncing = function(fn , delay){
    let timer;
    return function(){
        let context = this ,
        args = arguments;
        clearTimeout(timer);    
        timer = setTimeout(()=>{
          fn.apply(context , args)

        //   By using apply, we can ensure that the original function is called with the correct "this" 
        //   context and arguments, even if they have been modified by the debounce wrapper function. 

        },delay)
    }
}


const fetchingData = debouncing(getData , 500);

// --------------------------------------------------------------------------------------------//

// Throttling ---------------------------->
// limiting the number of times a function gets called in a certain time period.

let count = 0;
function scroll(){
    console.log("page is Resizing...." + count++);
}

const throttle = function(fn , delay){
    let flag = true;
    return function(){
      let context = this,
          args = arguments;

        if(flag){
            fn.apply(context , args);
            flag = false;

            setTimeout(()=>{
            flag = true;
            },delay)
        }  
    }
}
const resizie = throttle(scroll , 1000);
window.addEventListener("resize" , resizie)

// --------------------------------------------------------------------------------------------//

// Debouncing V/S Throttling --------------------->

// Debounce is most suitable for control events like typing or button clicks. 
// Throttle is most suitable for continuous user events like resizing and scrolling.

// In Debouncing if differnence between two keypress is xyz then do function call;
// In throttling  make call to the function after xyz time;
//! CALL --------------------->

// 1. Normal way -

const person_1= {
    name : "Arpita",
    age : "25"
}

function info_1(lastName){
  console.log(`My name is ${this.name} ${lastName} and I am ${this.age} yrs old`);
}

info_1.call(person_1 , "Pathak");

//-----------------------------------------------//

// 2. Polyfill -

Function.prototype.myCall = function(context= {} , ...args){
    if(typeof this !== "function"){
        throw new Error(this + "is not called");
    }

    context.fn = this;
    context.fn(...args);
}

info_1.myCall(person_1 , "PATHAK");

//---------------------------------------------------------------------------------------------//
//! APPLY --------------------->

// 1. Normal way -

const person_2 = {
    name : "Aditee",
    age : "29"
}
function info_2(lastName){
    console.log(`I am ${this.name} ${lastName} , I am ${this.age} yrs old.`)
}

info_2.apply(person_2 , ["Pathak"])

//-----------------------------------------------//

// 2. Polyfill -

Function.prototype.myApply = function(context = {} , args = []){
    if(typeof this !== "function"){
        throw new Error (this + "is not called");
    }

    if(!Array.isArray(args)){
        throw new TypeError("Is not an Array");
    }

    context.fn = this;
    context.fn(...args);
}

// info.myApply(person_1 , "PATHAK"); ---------------> Here Pathak is not written in Array so we get an Error here
info_2.myApply(person_2 , ["PATHAK"]);

//---------------------------------------------------------------------------------------------//
//! BIND --------------------->

// 1. Normal way -

const person_3 = {
    name : "Arpita",
    age : "25" 
} 

function info_3 (lastname) {
    console.log(`Hi , I am ${this.name} ${lastname} , and my age is ${this.age} yrs old.`)
}

// const info = info_3.bind(person_3); ---------------> It will return info_3 function in console
// console.log(info);

const info = info_3.bind(person_3); 
     info("Pathak");

//-----------------------------------------------//

// 2. Polyfill -

Function.prototype.myBind = function(context ={} , ...arg){
    if(typeof this !== "function"){
         throw new Error(this + "is not callable");
    }

    context.fn = this;
    return function (...newArgs){
        return context.fn(...arg, ...newArgs);
    };
};

const infoBind = info_3.myBind(person_3);
    infoBind("PATHAK");
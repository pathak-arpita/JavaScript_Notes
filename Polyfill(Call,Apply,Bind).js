const my_name = {
    firstName: "john",
    lastName: "Doe"
}

const fullName = function(dialouge)  {
    console.log(`My name is ${this.firstName} ${this.lastName} & ${dialouge}`)
}

//---------------------------------------------------------------------------------------------//

//^ 1 : Call ------------------------------------------>

//! Normal way 

fullName.call(my_name, "I am comming from normal call method");

//! Polyfill

Function.prototype.myCallFunction = function (context = {}, ...args) {
    if (typeof this !== "function") {
        throw Error("this is not a function");
    }

    context.fn = this;
    context.fn(...args);
}

fullName.myCallFunction(my_name, "I am comming from polyfill of call method");

//---------------------------------------------------------------------------------------------//

//^ 1 : Apply ------------------------------------------>

//! Normal way 

fullName.apply(my_name, ["I am comming from normal apply method"]);

//! Polyfill

Function.prototype.myApplyFunction = function(context={} , args=[]){
    if(typeof this !== "function"){
        throw Error("This is not function type");
    }

    if(!Array.isArray(args)){
        throw Error("Passing arguments are not array type");
    }

    context.fn = this;
    context.fn(...args);
}

fullName.myApplyFunction(my_name , ["I am comming from polyfill of apply method"])

//---------------------------------------------------------------------------------------------//

//^ 1 : Bind ------------------------------------------>

//! Normal way 

fullName.bind(my_name, "I am comming from normal Bind method")();


//! Polyfill 

Function.prototype.myBlindFunction = function(context={} , ...args){
    if(typeof this !== "function"){
        throw Error("this is not function type");
    }

    context.fn = this;
    return function(...newArgs){
        context.fn(...args,...newArgs);
    }
}

fullName.myBlindFunction(my_name , "I am comming from polyfill of Bind method")();
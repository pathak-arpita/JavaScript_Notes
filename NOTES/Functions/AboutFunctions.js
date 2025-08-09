//! Function Statement / Function Declaration  - 
function a(){
    console.log("Calling Function Statement - a");
}
// a();

// --------------------------------------------------------------------------------------------//

//! Function Expression - 
const b = function(){
    console.log("Calling Function Expression - b");
}

a();
b();

//  NOTE -----------> DIFFERENCE BETWEEN THEM IS FUNCTION STATEMENT AND DECLARATION IS , 
//                    FUNCTION STATEMENT CAN HOISTED , BUT FUNCTION EXPRESSION CANNOT. 

// --------------------------------------------------------------------------------------------//

//! Anonymous Function - 
//  The function having no name is known as anonymous function - they used as functions
//   are  used as a values

var c = function(){
    console.log("Calling Anonymous Function - c");
}
c();

// --------------------------------------------------------------------------------------------//

//! Named Function - 

var d = function xyz (){
    console.log("Calling Named Function - d");
    console.log(xyz);
}
// xyz(); -------------------------> Here we get an Error because it is not declare globally
//                                   But in line Node. 37 we can     
d();

// --------------------------------------------------------------------------------------------//

//! Factory Function - It is a function which creates a instance of a objects having same properties 
//!                   and methods as Factory function and you can create these objects without using 
//!                    "NEW KEYWORD".

function information(name , age , gender){
    return {
        name : name,
        age : age ,
        gender : gender,

        sayHi : function(){
            console.log(`My name is ${this.name} and my age is ${this.age}`)
        }
    }
}

const Person1 = information("Arpita", 25 , "Female");
const Person2 = information("Ram" , 50 , "Male");

Person1.sayHi();
Person2.sayHi();
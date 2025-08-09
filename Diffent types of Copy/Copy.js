//! Shallow Copy ---------->

//^ Two ways to make  Shallow Copy :

let obj_1 = {
    name: "Peter"
}

//* Using spread operator : 
let user_1 = { ...obj_1 };
user_1.name = "Seeta";
console.log("User using spread operator ----> ", user_1);

//* Using obj_1ect.assign method : 
let user_2 = Object.assign({}, obj_1);
user_1.name = "Sham";
console.log("User using obj_1ect.assign method ----> ", user_2);


//! NOTE -----------------------> 
//* But it is not working in nested case. for that we have to use DEEP COPY.

// --------------------------------------------------------------------------------------------//

//! Deep Copy ---------->


let obj_2 = {
    name: "Peter",
    address: {
        city: "Pune",
        state: "MH"
    },
    getData:function(){
        return "printing data"
    }
}

let user_3 = JSON.parse(JSON.stringify(obj_2));
user_3.address.city = "Mumbai"
console.log("User using Deep Copy ----> ", user_3);

//! NOTE -----------------------> 
//* But it is not working in DATES & FUNCTIONS.
//* For that we have to use "LOADAS LIBRARY"

let obj_3 = {
    name: "Peter",
    address: {
        city: "Pune",
        state: "MH"
    },
    getData:function(){
        return "printing data"
    }
}


let user_4 =_.cloneDeep(obj_3);
user_3.address.city = "Mumbai"
console.log("User using LOADAS LIBRARY ----> ", user_4);
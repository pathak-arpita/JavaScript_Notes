//!   QUE ------> 1.
//^   How do you deeply clone a nested object without using JSON.stringify?.

const person = {
    name: "Arpita",
    address: { city: "Pune" },
    hobbies: ["coding", "music", "traveling"]
};

function deepCloneFunc(obj) {
    if (typeof obj !== "object") {
        return obj;
    }

    let clone = Array.isArray(obj) ? [] : {};

    for (let item in obj) {
        clone[item] = deepCloneFunc(obj[item]);
    }

    return clone;

}

const copyObj = deepCloneFunc(person);
copyObj.name = "Seeta";
person.name = "XYZ";
console.log("person --> ", person);
console.log("copyObj --> ", copyObj);
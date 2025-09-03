//!   QUE ------> 1.
//^   Group the items of the same age

const people = [
    { name: "Arpita", age: 25 },
    { name: "Rahul", age: 30 },
    { name: "Sneha", age: 25 },
    { name: "Babita", age: 28 },
    { name: "Rekha", age: 30 }
];

let grouped = {};
for (let item of people) {
    if (!grouped[item.age]) {
        grouped[item.age] = [];
    }
    grouped[item.age].push(item);
}

console.log("Group the items of the same age ------> ", grouped);

// --------------------------------------------------------------------------------------------//

//!   QUE ------> 2.
//^   Arrange name by Ascending Order

let ans = [...people].sort((a, b) => a.name > b.name ? 1 : -1);
// console.log("Arrange name by Ascending Order ------> ", ans)

// --------------------------------------------------------------------------------------------//

//!   QUE ------> 3.
//^   Show key only based on particular condition is true without using any extra object.

let obj = {
    name: "Arpita Pathak",
    ...((6 < 5) ? { age: "28" } : {})
}

// console.log("Show key only based on particular condition is true without using any extra object ------> ", obj)

// --------------------------------------------------------------------------------------------//
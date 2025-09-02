const arr = [1, 2, [3, 4, [5], [6]], 7, [8, [9, [10]]]];

// --------------------------------------------------------------------------------------------//

//!   QUE ------> 1.
//^   Flattering Array

function flattenArray(arr) {
    let result = [];
    for (let item of arr) {
        if (Array.isArray(item)) {
            let newItem = flattenArray(item);
            // result.push(...newItem)                 //^ --------------> Normal Way
            result = result.concat(newItem);           //^ --------------> By using Concat Way
        }
        else {
            result.push(item);
        }
    }
    return result;
}

const ans = flattenArray(arr);
 console.log("ans ------> ", ans);


// --------------------------------------------------------------------------------------------//


//!   QUE ------> 2.
//^   Flattering Array based on how many levels i have passed.

function flattenArrayBasedOnLevel(arr, count) {
    let result = [];
    for (let item of arr) {
        if (Array.isArray(item)) {
            if (count) {
                let newItem = flattenArrayBasedOnLevel(item, count - 1);
                result.push(...newItem);
            } else {
                result.push(item);
            }
        } else {
            result.push(item);
        }
    }
    return result;
}

const answer = flattenArrayBasedOnLevel(arr, 2);
console.log("answer of flattenArrayBasedOnLevel ------> ", answer);
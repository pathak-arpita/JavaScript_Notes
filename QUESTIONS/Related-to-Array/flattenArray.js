const arr = [1, 2, [3, 4, [5], [6]], 7, [8, [9, [10]]]];

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
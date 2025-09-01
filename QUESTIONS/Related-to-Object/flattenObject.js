const obj = {
    name: "Arpita",
    address: {
        city: "Pune",
        pinCode: 411001
    },
    sample: { add: [1, 3, 3, 4, 5, 3] },
    demo: [1, 3, 3, 4, 5, 3],
};

function flattenObject(obj) {
    let result = {};
    for (let item in obj) {
        if (typeof obj[item] === "object" && !Array.isArray(obj[item])) {
            let newObj = obj[item];
            for (let innerItem in newObj) {
                console.log("inner item --> ", innerItem)
                if (Array.isArray(newObj[innerItem])) {
                    let index = 0;
                    for (let i of newObj[innerItem]) {
                        result[`${item}.${innerItem}[${index}]`] = i;
                        index++;
                    }
                }
                else {
                    result[`${item}.${innerItem}`] = newObj[innerItem];
                }
            }

        }
        else if (Array.isArray(obj[item])) {
            let index = 0;
            for (let i of obj[item]) {
                result[`${item}[${index}]`] = i;
                index++;
            }
        }
        else {
            result[item] = obj[item]
        }
    }
    return result;
}

const ans = flattenObject(obj);
console.log("ans --> ", ans);


//! ans ------------>  {
//   name: 'Arpita',
//   'address.city': 'Pune',
//   'address.pinCode': 411001,
//   'sample.add[0]': 1,
//   'sample.add[1]': 3,
//   'sample.add[2]': 3,
//   'sample.add[3]': 4,
//   'sample.add[4]': 5,
//   'sample.add[5]': 3,
//   'demo[0]': 1,
//   'demo[1]': 3,
//   'demo[2]': 3,
//   'demo[3]': 4,
//   'demo[4]': 5,
//   'demo[5]': 3
//! }
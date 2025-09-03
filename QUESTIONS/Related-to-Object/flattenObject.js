const obj = {
    name: "Arpita",
    address: {
        city: "Pune",
        pinCode: 411001,
        area: {
            location: "Kothrud",
            leanNo: { No: 17 }
        }
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
                    if (typeof newObj[innerItem] === "object" && !Array.isArray(newObj[innerItem])) {
                        let deeper = flattenObject(newObj[innerItem]);
                        for (let key in deeper) {
                            result[`${item}.${innerItem}.${key}`] = deeper[key];
                        }
                    } else {
                        result[`${item}.${innerItem}`] = newObj[innerItem];
                    }
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

//* -------------------------------------------------------------------------------------------- *//

//!   QUE ------> 2.
//^   Convert an object with nested properties into a flat object (flatten object).

const myObj = {
    name: "Arpita",
    age: 25,
    address: {
        city: "Pune",
        state: "Maharashtra",
        pinCode: 411001,
        location: {
            lat: 18.5204,
            lng: 73.8567
        }
    }
}

let result = {};
function flattenObject(obj, prefix = "") {
    for (let item in obj) {
        if (typeof obj[item] === "object") {
            flattenObject(obj[item], prefix ? `${prefix}.${item}` : item);
        }
        else {
            let newKey = prefix ? `${prefix}.${item}` : item;
            result[newKey] = obj[item];
        }
    }
    return result;
}

const ans_flatten_object = flattenObject(myObj, "");
console.log("ans_flatten_object ---> ", ans_flatten_object);


//* -------------------------------------------------------------------------------------------- *//


//!   QUE ------> 3.
//^   Recreate the object from a flattened object.

const myFlattenedObj = {
    name: 'Arpita',
    age: 25,
    'address.city': 'Pune',
    'address.state': 'Maharashtra',
    'address.pincode': 411001,
    'address.location.lat': 18.5204,
    'address.location.lng': 73.8567
}

function reCreateObject(obj) {
    let result = {};
    for (let item in obj) {
        let newKeyArr = item.split(".");
        let curr = result;

        for (let i = 0; i < newKeyArr.length - 1; i++) {
            let key = newKeyArr[i];

            if (!curr[key]) {
                curr[key] = {};
            }
            curr = curr[key]
        }
        curr[newKeyArr[newKeyArr.length - 1]] = obj[item];
    }
    return result;
}

const back_to_obj = reCreateObject(myFlattenedObj);
console.log("back_to_obj ---> ", back_to_obj);
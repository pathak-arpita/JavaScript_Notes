const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//*---------------------------------------------------------------------------------------------*//

//^ 1 : Map ------------------------------------------>

//! Normal way 

const arr_map = arr.map((x) => {
    return x * 10;
});
console.log("ans of arr_map--------> ", arr_map);


//! Polyfill

Array.prototype.myMapFunction = function (cb) {

    if (!Array.isArray(this)) {
        throw Error("this is not an array type.");
    }

    let temp = [];
    for (let i = 0; i < this.length; i++) {
        temp.push(cb(this[i], i, this));
    }
    return temp;
}

const arr_map_polyfill = arr.myMapFunction((x) => {
    return x / 2;
})

console.log("ans of arr_map_polyfill--------> ", arr_map_polyfill);

//*---------------------------------------------------------------------------------------------*//

//^ 2 : Filter ------------------------------------------>

//! Normal way 

const arr_filter = arr.filter((x) => {
    return x > 5;
});
console.log("ans of arr_filter--------> ", arr_filter);


//! Polyfill

Array.prototype.myFIlterFunction = function (cb) {

    if (!Array.isArray(this)) {
        throw Error("this is not an array type.");
    }

    let temp = [];
    for (let i = 0; i < this.length; i++) {
        if (cb(this[i], i, this)) {
            temp.push(this[i])
        }
    }
    return temp;
}

const arr_filter_polyfill = arr.myFIlterFunction((x) => {
    return x % 2 == 0;
})

console.log("ans of arr_filter_polyfill--------> ", arr_filter_polyfill);

//*---------------------------------------------------------------------------------------------*//

//^ 3 : Reducer ------------------------------------------>

//! Normal way 

const arr_reducer = arr.reduce((acc, curr) => {
    return acc + curr;
}, 0);
console.log("ans of arr_reducer--------> ", arr_reducer);


//! Polyfill

Array.prototype.myReducerFunction = function (cb, initialVal) {

    if (!Array.isArray(this)) {
        throw Error("this is not an array type.");
    }

    let acc = initialVal;
    for (let i = 0; i < this.length; i++) {
        acc = acc ? cb(acc, this[i], i, this) : this[i];
    }

    return acc;
}

const arr_reducer_polyfill = arr.myReducerFunction((curr, acc) => {
    return curr + acc;
},100)

console.log("ans of arr_reducer_polyfill--------> ", arr_reducer_polyfill);
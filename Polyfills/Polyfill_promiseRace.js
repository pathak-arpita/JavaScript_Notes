//! Promise.race ----------------------> it works when any promise is executed firstly;

const promise_1 = Promise.resolve("Promise 1 is resolved");
const promise_2 = 40;
const promise_3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Promise 3 is rejected");
    }, 5000)
})



//* Normal Way ----------------->

Promise.race([promise_1, promise_3, promise_2])
    .then((res) => {
        console.log("from normal way ------> ", res);
    }).catch((err) => {
        console.log("error from normal way ------> ", err);
    })


//* Polyfill ----------------->

Promise.myRaceFunction = function (promiseArr) {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(promiseArr)) {
            reject("arguments are not array type.");
            return;
        }

        if (promiseArr.length === 0) {
            return;
        }

        // let count = 0;
        // let resultArr = [];
        promiseArr.forEach((promise, index) => {
            Promise.resolve(promise)
                .then((res) => {
                    resolve(res);
                })
                .catch((err) => {
                    reject(err);
                })
        })
    })
}

Promise.myRaceFunction([promise_3, promise_2])
    .then((res) => {
        console.log("From polyfill function --------> ", res);
    }).catch((err) => {
        console.log("error from polyfill function --------> ", err);
    })
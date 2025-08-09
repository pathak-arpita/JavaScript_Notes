//! Promise.allSettled() ------------->
//*       Waits for all promises to settle (either fulfilled or rejected).
//*       Always returns an array of objects describing each promise’s status and value/reason.


//! Promise.all() ------------->
//*       Takes an array of promises and returns a single promise.
//*       Resolves when all promises are fulfilled → returns an array of results in the same order as given.
//*       Rejects immediately if any promise is rejected → returns that rejection reason.


//! Promise.any() ------------->
//*.      Returns the first fulfilled promise.
//*.      Ignores rejections unless all promises are rejected → then returns an AggregateError.


//! Promise.race() ------------->
//*       It Will return when 1st promise is settle down (either fulfilled or rejected).

// --------------------------------------------------------------------------------------------//

//* Create a Promise ------------------------->

console.log("START");

const xyz = new Promise((resolve, reject) => {

    setTimeout(() => {
        const result = true;
        if (result) {
            resolve("Promise is Fulfilled");
        }
        else {
            reject(new Error("Promise is Rejected"));
        }
    }, 5000)
})

xyz.then((res) => {
    console.log(res);
}).catch((err) => {
    console.err(err);
})

console.log("END");
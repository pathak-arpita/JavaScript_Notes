//! Promise.all ----------------------> if all promise are resolve then only it will work.


const promise_1 = Promise.resolve("Promise 1 is resolved");
const promise_2 = 40;
const promise_3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Promise 3 is rejected");
  }, 5000)
})



//* Normal Way ----------------->

Promise.all([promise_1, promise_2, promise_3]).then((res) => {
  console.log("Normal way ---------> ", res)
}).catch((err) => {
  console.log("error from Normal way ---------> ", err)
})


//* Polyfill ----------------->

Promise.myPromiseAllFunction = function (promiseArr) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promiseArr)) {
      reject("arguments are not array type.");
      return;
    }

    if (promiseArr.length === 0) {
      resolve([]);
      return;
    }
    let count = 0;
    let resultArr = [];

    promiseArr.forEach((promise, index) => {
      Promise.resolve(promise).then((res) => {
        resultArr[index] = res;
        count++;

        if (count === promiseArr.length) {
          resolve(resultArr);
          return;
        }
      }).catch((err) => {
        reject(err);
      })
    })

  })
}

Promise.myPromiseAllFunction([promise_1, promise_2]).then((res)=>{
  console.log("From polyfill function --------> " , res);
}).catch((err)=>{
   console.log("error from polyfill function --------> " , err);
})
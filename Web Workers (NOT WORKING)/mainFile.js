//! Web Worker --------------------------->
//* It is used to do a complex operations without blocking main thread;


let btn_1 = document.getElementById("data");
let btn_2 = document.getElementById("hi");

btn_1.addEventListener("click", () => {
    const workerData = new Worker("worker.js");
    workerData.postMessage("start");
    workerData.onmessage = function(e) {
        document.querySelector("#result").innerHTML = e.data;
    }
})

btn_2.addEventListener("click", () => {
    document.getElementById("hello").innerHTML += "Hi !!!!";
})



//---------------------------------------------------------------------------------------------//


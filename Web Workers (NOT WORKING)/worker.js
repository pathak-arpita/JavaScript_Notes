
onmessage = function (e) {
    if (e.data === "start") {
        // Simulate heavy work
        let sum = 0;
        for (let i = 0; i < 500000000; i++) {
            sum += i;
        }
        // Send result back
        postMessage("Sum is: " + sum + "<br>");
    }
};

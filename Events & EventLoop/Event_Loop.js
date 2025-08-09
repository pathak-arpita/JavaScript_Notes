//! What is Event Loops ---------------------------->

//^ Ans --------->

/*
    Java script is synchronous - single threaded language.

    The Event Loop is the mechanism that allows JavaScript to handle asynchronous operations like setTimeout, promises, or fetch without blocking the main thread.

    JavaScript runs code in the Call Stack (synchronous).

    Asynchronous tasks (like timers, API calls) go to the Web APIs (handled by the browser).

    Once done, their callback goes to the Callback Queue or Microtask Queue.

    The Event Loop keeps checking:

    If the Call Stack is empty, it pushes tasks from the Queue into the Call Stack to be executed.

 */

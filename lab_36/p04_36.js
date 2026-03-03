// Task 1: Create a counter function that returns another function
function counter() {
    let count = 0; // This is a "private" variable

    return function() {
        count++;
        return count;
    };
}

// Task 2: Create two separate counters
const counterA = counter();
const counterB = counter();

// Task 3: Observe that each maintains its own state
console.log("Counter A:", counterA()); // 1
console.log("Counter A:", counterA()); // 2
console.log("Counter B:", counterB()); // 1 (Starts fresh!)
console.log("Counter A:", counterA()); // 3 (Still remembers its own count)
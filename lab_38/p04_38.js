// 1. Create a function divide(a, b)
function divide(a, b) {
    // 2. Use try...catch inside the function
    try {
        // 3. If b is 0, manually throw an error
        if (b === 0) {
            throw new Error("Cannot divide by zero");
        }
        // 5. Otherwise, return the division result
        return a / b;
    } catch (error) {
        // 4. Catch the error and log the custom message
        console.error(error.message);
    }
}

// --- Testing the function ---

// Successful case: 10 / 2
console.log(divide(10, 2)); // Output: 5

// Error case: 10 / 0
divide(10, 0); // Output (in red): Cannot divide by zero
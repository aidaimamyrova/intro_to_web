// 1. Write a function fetchData() that returns a Promise
function fetchData() {
    return new Promise((resolve) => {
        // Resolves with "Data received" after 2 seconds
        setTimeout(() => {
            resolve("Data received");
        }, 2000);
    });
}

// 2. Use .then() to print the result when it resolves
fetchData()
    .then((result) => {
        console.log(result); // Logs "Data received"
    })
    // 3. Add .finally() to log completion regardless of outcome
    .finally(() => {
        console.log("Request completed");
    });
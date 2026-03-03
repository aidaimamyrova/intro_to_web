// 1. Modify fetchData() to randomly resolve or reject
function fetchData() {
    return new Promise((resolve, reject) => {
        const success = Math.random() > 0.5; // 50/50 chance

        setTimeout(() => {
            if (success) {
                resolve("Data received");
            } else {
                reject("Error: Failed to fetch data");
            }
        }, 2000);
    });
}

// 2. Use .then(), .catch(), and .finally() to handle the results
fetchData()
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.error(error);
    })
    .finally(() => {
        console.log("Request completed");
    });
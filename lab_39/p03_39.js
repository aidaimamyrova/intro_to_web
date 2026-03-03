function startCounter() {
    // 1. Initialize a counter at 1
    let count = 1;

    // 2. Use setInterval to print the counter every second (1000 ms)
    // We store the interval in a variable so we can stop it later
    const intervalId = setInterval(() => {
        console.log("Counter:", count);

        // 3. Stop the interval when the counter reaches 5
        if (count === 5) {
            clearInterval(intervalId);
        }

        count++;
    }, 1000);
}

// Start the process
startCounter();
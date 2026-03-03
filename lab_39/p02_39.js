// 1. Create the delayedMessage function
function delayedMessage(message, delay) {
    // Uses setTimeout to log the message after the specified delay
    setTimeout(() => {
        console.log(message);
    }, delay);
}

// 2. Call the function with specific arguments
// Note: 3000 ms = 3 seconds
delayedMessage("Hello, after 3 seconds!", 3000);
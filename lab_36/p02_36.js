// Task 1: Global variable
let message = "Hello from global";

function printMessage() {
    // Task 2: Local variable with the same name
    let message = "Hello from local";
    console.log(message); // This will log "Hello from local"
}

// Execution
printMessage(); // Calls the function

// Task 3: Logging the global variable
console.log(message); // This will log "Hello from global"

// console.log(localOnlyVar); // This would cause a ReferenceError
// 1. Create a try...catch block
try {
    // 2. Inside try, attempt to log an undefined variable
    console.log(someUndefinedVar);
} catch (error) {
    // 3. Catch the error and log "Variable is not defined"
    console.error("Variable is not defined");
}
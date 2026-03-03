// Task 1: Using 'var' inside an if block
if (true) {
    var varVariable = "I am a var";
}
console.log(varVariable); // Works! var "leaks" out of the block.

// Task 2: Using 'let' and 'const' inside an if block
if (true) {
    let letVariable = "I am a let";
    const constVariable = "I am a const";
}

// These will cause a ReferenceError because they are restricted to the block
// console.log(letVariable);
// console.log(constVariable);
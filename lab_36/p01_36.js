// Task 1: Function using the 'function' keyword
function addNumbers(num1, num2) {
    return num1 + num2;
}

// Task 2: Arrow function to calculate the square of a number
const squareNumber = (n) => n * n;

// Task 3: Function expression that returns the larger of two numbers
const findLarger = function(a, b) {
    return a > b ? a : b;
};

console.log("Sum:", addNumbers(5, 10));          // Output: 15
console.log("Square:", squareNumber(4));         // Output: 16
console.log("Larger number:", findLarger(8, 12)); // Output: 12
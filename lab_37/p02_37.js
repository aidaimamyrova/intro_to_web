let numbers = [10, 20, 30, 40, 50];

// 1. Extract a portion from index 1 to 3
// Note: slice(start, end) includes 'start' but excludes 'end'
let extractedPart = numbers.slice(1, 3);

// 2. Store the result and print it
console.log("Extracted part:", extractedPart); // Output: [20, 30]

// 3. Print the original array to ensure it's unchanged
console.log("Original array:", numbers); // Output: [10, 20, 30, 40, 50]
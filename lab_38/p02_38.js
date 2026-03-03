// 1. Create an array of numbers
let numbers = [10, 15, 20, 25, 30];
let totalSum = 0;

// 2. Use a loop to iterate through the array
for (let i = 0; i < numbers.length; i++) {
    let currentNumber = numbers[i];

    // 3. Inside the loop, log each number for debugging
    console.log("Current number:", currentNumber);

    // 4. If the number is even, add it to the sum
    if (currentNumber % 2 === 0) {
        totalSum += currentNumber;
    }
}

// 5. Print the final sum
console.log("Total sum of even numbers:", totalSum);
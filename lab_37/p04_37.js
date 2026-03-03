let ages = [12, 18, 25, 30, 15];

// 1. Filter only values greater than or equal to 18
let adults = ages.filter(age => age >= 18);

// 2. Print the filtered array
console.log("Filtered ages (18+):", adults); // [18, 25, 30]
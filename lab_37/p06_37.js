let car = {
    brand: "Tesla",
    model: "Model S",
    year: 2023
};

// 1. Extract and print the keys using Object.keys()
let keys = Object.keys(car);
console.log("Object Keys:", keys);
// Output: ["brand", "model", "year"]

// 2. Extract and print the values using Object.values()
let values = Object.values(car);
console.log("Object Values:", values);
// Output: ["Tesla", "Model S", 2023]
function parseJSON(jsonStr) {
    try {
        // 2. Attempt to parse the JSON string
        let parsedObject = JSON.parse(jsonStr);

        // 3. If parsing succeeds, log the object
        console.log(parsedObject);
    } catch (error) {
        // 4. If parsing fails, catch the error and log custom message
        console.error("Invalid JSON format");
    }
}

// Valid case:
parseJSON('{"name": "Alice", "age": 25}');

// Error case:
parseJSON('Invalid String');
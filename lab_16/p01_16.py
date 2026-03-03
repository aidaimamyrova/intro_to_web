import json

# Step 1: Create a Python dictionary with student information
student_info = {
    "name": "Alice",
    "age": 21,
    "courses": ["Math", "Science", "History"]
}

# Step 2: Convert the Python dictionary to a JSON string
# indent=4 makes it "pretty-printed" (easier for humans to read)
json_string = json.dumps(student_info, indent=4)

# Step 3: Print the JSON string
print("Serialized JSON string:")
print(json_string)
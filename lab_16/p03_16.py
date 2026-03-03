import json

# Step 1: Create a Python dictionary with student information
student_info = {
    "name": "Alice",
    "age": 21,
    "courses": ["Math", "Science", "History"]
}

# Define the filename to store the JSON data
filename = 'student.json'

# Step 2: Write the dictionary to a JSON file using json.dump()
with open(filename, 'w') as file:
    json.dump(student_info, file, indent=4)
print(f"Data has been written to {filename}")

# Step 3: Read the JSON data back from the file using json.load()
with open(filename, 'r') as file:
    data_loaded = json.load(file)

# Step 4: Print the Python object read from the file
print("Data loaded from the JSON file:")
print(data_loaded)
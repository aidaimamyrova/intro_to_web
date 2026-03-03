import json

# Step 1: Define a JSON string (simulate receiving data from an API)
json_string = '''
{
    "name": "Alice",
    "age": 21,
    "courses": ["Math", "Science", "History"]
}
'''

# Step 2: Convert the JSON string back to a Python dictionary
student_info = json.loads(json_string)

# Step 3: Print the Python dictionary
print("Deserialized Python object:")
print(student_info)
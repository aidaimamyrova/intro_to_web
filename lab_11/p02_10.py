student = {"name": "Alice", "age": 22, "grade": "A"}
student["subject"] = "Math"
student["grade"] = "A+"
student.pop("age")

print(student.keys())   # dict_keys(['name', 'grade', 'subject'])
print(student.values()) # dict_values(['Alice', 'A+', 'Math'])
print(student.items())  # dict_items([('name', 'Alice'), ('grade', 'A+'), ('subject', 'Math')])


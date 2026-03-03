# Basic list operations
numbers = [10, 20, 30, 40, 50]
numbers.append(60)   # [10, 20, 30, 40, 50, 60]
numbers.insert(1, 15) # [10, 15, 20, 30, 40, 50, 60]
numbers.remove(30)   # [10, 15, 20, 40, 50, 60]
numbers.reverse()    # [60, 50, 40, 20, 15, 10]
numbers.sort()       # [10, 15, 20, 40, 50, 60]

print(numbers)

print(numbers[:3])
print(numbers[-2:])
print(numbers[::-1])
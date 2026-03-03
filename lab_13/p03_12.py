import re

# Sample text with numbers
text = "There are 3 apples, 15 oranges, and 256 bananas in the basket."

# Pattern to match one or more digits
pattern = r"\d+"

# Replace all digit sequences with "NUMBER"
result = re.sub(pattern, "NUMBER", text)

print("Modified Text:", result)
import re

# Sample strings
text1 = "Hello, world! Welcome to regex."
text2 = "Greetings! Hello, how are you?"

# Pattern to check for "Hello"
pattern = r"Hello"

# Using re.match() on text1 (should match)
match1 = re.match(pattern, text1)
print("Using re.match() on text1:")
if match1:
    print("Match found:", match1.group())
else:
    print("No match found.")

# Using re.match() on text2 (should not match because "Hello" is not at the beginning)
match2 = re.match(pattern, text2)
print("\nUsing re.match() on text2:")
if match2:
    print("Match found:", match2.group())
else:
    print("No match found.")

# Using re.search() on text2 (should find "Hello" anywhere in the string)
search_result = re.search(pattern, text2)
print("\nUsing re.search() on text2:")
if search_result:
    print("Found:", search_result.group())
else:
    print("No match found.")
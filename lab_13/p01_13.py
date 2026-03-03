import re

# Sample text containing phone numbers
text = "Call me at 555-1234 or at the office line 555-5678. For emergencies, dial 555-9999."

# Define the regex pattern for phone numbers: three digits, a hyphen, and four digits.
pattern = r"\d{3}-\d{4}"

# Find all matches
phone_numbers = re.findall(pattern, text)

print("Phone Numbers Found:", phone_numbers)
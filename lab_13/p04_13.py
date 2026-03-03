import re

# Sample text containing email addresses
text = "For more info, contact us at support@example.com or sales-info@example.org."

# Regex pattern to match simple email addresses
pattern = r"\b\w+@\w+\.\w+\b"

# Find all email addresses in the text
emails = re.findall(pattern, text)

print("Email Addresses Found:", emails)
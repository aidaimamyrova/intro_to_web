import re

# Sample text
text = "An apple a day keeps the doctor away. Even elephants enjoy eating."

# Regex pattern: words that start with a vowel.
# \b = start of word
# [aeiou] = must be one of these letters
# \w* = followed by any number of word characters
pattern = r"\b[aeiou]\w*\b"

# Find all matches with case-insensitivity
vowel_words = re.findall(pattern, text, re.IGNORECASE)

print("Words starting with a vowel:", vowel_words)
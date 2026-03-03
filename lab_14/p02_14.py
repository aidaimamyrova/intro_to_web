from datetime import datetime

# Get the current date and time
today = datetime.now()

# Define a future event date (e.g., New Year's Eve)
new_years_eve = datetime(today.year, 12, 31)

# If today is already New Year's Eve or later in the year, adjust for the next year
# (Note: datetime() defaults to midnight, so if it's 10 AM on Dec 31st,
# 'today' is technically greater than 'new_years_eve' at 00:00:00)
if today > new_years_eve:
    new_years_eve = datetime(today.year + 1, 12, 31)

# Calculate the difference between the two dates
time_until_new_year = new_years_eve - today

print("Days until New Year's Eve:", time_until_new_year.days)
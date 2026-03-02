import time
from datetime import datetime, timedelta

def countdown_timer(seconds):
    # Calculate the end time by adding a timedelta to the current time
    end_time = datetime.now() + timedelta(seconds=seconds)
    while True:
        # Calculate the remaining time
        remaining = end_time - datetime.now()
        total_seconds = int(remaining.total_seconds())

        if total_seconds <= 0:
            print("Time remaining: 0 seconds")
            break

        # print with end="\r" overwrites the same line instead of making a new one
        print(f"Time remaining: {total_seconds} seconds", end="\r")
        time.sleep(1)

    print("\nTimer finished!")

# Start a 10-second timer
countdown_timer(10)
from datetime import datetime

now = datetime.now()

formatted_now = now.strftime("%d/%m/%Y %H:%M:%S")
print("Current Date and Time:", formatted_now)
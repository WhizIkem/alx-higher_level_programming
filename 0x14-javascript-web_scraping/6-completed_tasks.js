#!/usr/bin/node

import requests

# API URL
api_url = "https://jsonplaceholder.typicode.com/todos"

# Send GET request to the API
response = requests.get(api_url)

# Check if the request was successful
if response.status_code == 200:
    todos = response.json()
    users = {}

    # Compute the number of completed tasks by user ID
    for todo in todos:
        if todo["completed"]:
            user_id = todo["userId"]
            if user_id in users:
                users[user_id] += 1
            else:
                users[user_id] = 1

    # Create a list of users with completed tasks
    completed_users = [
        {"userId": user_id, "completedTasks": count}
        for user_id, count in users.items()
    ]

    # Print the result in JSON format
    print(json.dumps(completed_users, indent=4))

else:
    print("Error: Failed to retrieve data from the API.")

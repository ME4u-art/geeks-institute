from auth import register_user, login_user
from getpass import getpass

logged_in = None

while True:
    command = input("Enter a command (login/signup/exit): ").lower()
    
    if command == "exit":
        print("Exiting program...")
        break
    
    elif command == "login":
        username = input("Username: ")
        password = getpass("Password: ")
        if login_user(username, password):
            print("You are now logged in!")
            logged_in = username
        else:
            print("Invalid credentials.")
    
    elif command == "signup":
        username = input("Choose a username: ")
        password = getpass("Choose a password: ")
        register_user(username, password)
    
    else:
        print("Invalid command.")

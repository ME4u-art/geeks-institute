
class BankAccount:
    def __init__(self, username, password, balance, authenticated=False):
        self.username = username
        self.password = password
        self.balance = balance
        self.authenticated = authenticated

    def authenticate(self, name, userpassword):
        if name == self.username and userpassword == self.password:
            self.authenticated = True
            print(f"{self.username} is now authenticated.")
        else:
            print("Authentication failed.")

    def deposit(self, amount):
        if not self.authenticated:
            raise Exception("You are not authenticated.")
        if amount <= 0:
            raise Exception("Deposit amount must be positive.")
        self.balance += amount
        print(f"Deposited {amount}. New balance: {self.balance}")

    def withdraw(self, amount):
        if not self.authenticated:
            raise Exception("You are not authenticated.")
        if amount <= 0:
            raise Exception("Withdrawal amount must be positive.")
        if amount > self.balance:
            raise Exception("Insufficient balance.")
        self.balance -= amount
        print(f"Withdrew {amount}. New balance: {self.balance}")


class ATM:
    def __init__(self, account_list, try_limit=3):
        if not isinstance(account_list, list):
            raise Exception("account_list must be a list.")
        for acc in account_list:
            if not isinstance(acc, BankAccount):
                raise Exception("All items must be BankAccount instances.")
        self.account_list = account_list
        self.try_limit = try_limit

    def show_main_menu(self):
        while True:
            print("\n=== ATM Main Menu ===")
            print("1. Log in")
            print("2. Exit")
            choice = input("Select an option (1-2): ")
            if choice == "1":
                username = input("Enter username: ")
                password = input("Enter password: ")
                self.log_in(username, password)
            elif choice == "2":
                print("Exiting ATM. Goodbye!")
                break
            else:
                print("Invalid option. Try again.")

    def log_in(self, username, password):
        tries = 0
        while tries < self.try_limit:
            found = False
            for account in self.account_list:
                account.authenticate(username, password)
                if account.authenticated:
                    print(f"Welcome, {username}!")
                    self.show_account_menu(account)
                    return
            tries += 1
            if tries >= self.try_limit:
                print("Maximum login attempts reached. Shutting down.")
                exit()
            print(f"Login failed. Attempts left: {self.try_limit - tries}")
            username = input("Enter username: ")
            password = input("Enter password: ")

    def show_account_menu(self, account):
        while True:
            print("\n=== Account Menu ===")
            print("1. Deposit")
            print("2. Withdraw")
            print("3. Exit")
            choice = input("Select an option (1-3): ")
            if choice == "1":
                try:
                    amount = int(input("Enter deposit amount: "))
                    account.deposit(amount)
                except Exception as e:
                    print(f"Error: {e}")
            elif choice == "2":
                try:
                    amount = int(input("Enter withdrawal amount: "))
                    account.withdraw(amount)
                except Exception as e:
                    print(f"Error: {e}")
            elif choice == "3":
                print("Logging out of account menu.")
                break
            else:
                print("Invalid option. Try again.")


account1 = BankAccount("john_doe", "pass123", 1000)
account2 = BankAccount("jane_smith", "password", 500)


atm = ATM([account1, account2])
atm.show_main_menu()

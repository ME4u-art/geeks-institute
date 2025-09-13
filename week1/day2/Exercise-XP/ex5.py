import random
def guess_the_number():
    user_num = int(input("Guess the number from 1 to 100: "))
    random_num = random.randint(1, 100)
    if user_num == random_num:
        print(f"You guessed it right!! Your number {user_num} = Random number {random_num}")
    else:
        print(f"You failed to guess it. Your number {user_num} ≠ Random number {random_num}")

guess_the_number()
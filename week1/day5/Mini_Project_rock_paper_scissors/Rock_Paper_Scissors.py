
from game import Game

def get_user_menu_choice():
    print("\n====== Rock-Paper-Scissors Menu ======")
    print("1. Play a new game")
    print("2. Show scores")
    print("3. Quit")
    user_choice = input("Select an option (1-3): ").strip().lower()
    if user_choice == "1":
        return "1"
    elif user_choice == "2":
        return "2"
    elif user_choice == "3":
        return "3"
    else:
        print(" Invalid selection. Please choose 1, 2, or 3.")
        return None

def print_results(results):
    wins = results.get("win",0)
    losses = results.get("lose",0)
    draws = results.get("draw", 0)
    total = wins + losses + draws
    print(f"Wins: {wins}, Losses: {losses}, Draws: {draws} Thanks for playing!")

def main():
    results = {}
    while True:
        choice = get_user_menu_choice()
        if choice is None:
            continue
        if choice == "1":
            game = Game()
            result = game.play()
            results[result] = results.get(result,0)+1
        elif choice == "2":
            print_results(results)
        elif choice == "3":
            print_results(results)
            break  


if __name__ == "__main__":
    main()
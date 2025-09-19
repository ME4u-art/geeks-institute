import random
class Game():
    def get_user_item(self):
        while True:
            user_item = input(f"Please make Choice(rock/paper/scissors: )")
            if  user_item == "rock":
                return  user_item
            elif  user_item == "paper":
                return  user_item
            elif  user_item == "scissors":
                return  user_item
            else:
                print("Invalid choice. Please chose one of: rock, paper, or scissors.")
    def get_computer_item(self):
        choices =["rock","paper","scissors"]
        computer_item = random.choice(choices)
        return computer_item
    
    def get_game_result(self,user_item,computer_item):
        if user_item == computer_item:
            return "draw"
        elif ((user_item == "rock" and computer_item =="scissors") or 
              (user_item == "scissors" and computer_item == "paper")or 
              (user_item == "paper"and computer_item == "rock")):
            return "win"
        else:
            return "lose"
        

    def play(self):
        user_item = self.get_user_item()
        computer_item = self.get_computer_item()
        results_of_game = self.get_game_result(user_item,computer_item)
        print(f"You chose {user_item} and computer chose {computer_item}")
        if results_of_game == "win":
            print("You win!!!")
            return results_of_game
        elif results_of_game == "lose":
            print("You Lose")
            return results_of_game
        else:
            print("It`s a draw")
        return results_of_game
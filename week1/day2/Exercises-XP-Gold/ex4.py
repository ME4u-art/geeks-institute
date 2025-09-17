import random
def throw_dice():
    return random.randint(1,6)

def throw_until_doubles():
   throws = 0
   while True:
         throws+=1
         first_throw = throw_dice()
         second_throw = throw_dice()
         if first_throw == second_throw: 
             print(f'{first_throw} and {second_throw} Doubles You Win!!')
             print(f"Number of throwing the dic: {throws} ")
             return throws
def throw_100_times():
    double = 0
    totale_throws = 0
    while double < 100:
        totale_throws += throw_until_doubles()
        double+=1
    print(f"Reached 100 doubles!{double}")
    print(f"totale throws {totale_throws}")
    print(f"Average throws to reach doubles : {totale_throws / 100}")




throw_100_times()
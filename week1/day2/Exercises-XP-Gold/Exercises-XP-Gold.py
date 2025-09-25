##EX1##
birthdays = {
    "ahmed":"1999/02/02",
    "mohamed":"1998/06/20",
    "ayoube":"2007/10/25",
    "yahye":"2005/03/03",
    "hicham":"/1994/04/20"
    }

persons_name = input(f"Welcome you can look up the birthdays of the people: ").lower()
print(f"{persons_name}: {birthdays[persons_name]}")

##EX2##
birthdays = {
    "ahmed":"1999/02/02",
    "mohamed":"1998/06/20",
    "ayoube":"2007/10/25",
    "yahye":"2005/03/03",
    "hicham":"/1994/04/20"
    }
found = False
persons_name = input(f"Welcome you can look up the birthdays of the people in the list!{list(birthdays)}: ").lower()
for name in birthdays:
    if name == persons_name:
         print(f"{name}: {birthdays[name]}")
         found = True
if not found:
    print(f"Sorry, we don’t have the birthday information for {persons_name}")
         


##EX3##
user_input= input("Please Enter to sum : ")
def sum_pattern(user_input):
    num1 = int(user_input*1)
    num2 = int(user_input*2)
    num3 = int(user_input*3)
    num4 = int(user_input*4)
    total = num1+num2+num3+num4
    print(f"sum is: {total}")
    return total

sum_pattern(user_input)
##EX4##
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
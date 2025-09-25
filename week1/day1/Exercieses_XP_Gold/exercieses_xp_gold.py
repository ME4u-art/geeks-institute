##ex1##
user_input = int(input("please Ennter a month(1 to 12): "))

if 3<=user_input<=5:
    print("Spring")
elif 6<=user_input<=8:
    print("Summer")
elif 9<=user_input<=11:
    print("Autumn")
elif user_input == 12 or 1<= user_input <=2:
    print("Winter")
else:
    print("Invalid month")


##ex2##

number =  list(range(1,21))
for i in range(len(number)):
    if i % 2 == 0 :
        print(number[i])


for i in range(1,21) :
    print(i)

##ex3##

my_name = "hicham"
user_input = input("Guss my name: ")
while True:
    if my_name == user_input.lower():
        print("you guss it good job!!!")
        break
    else:
        print("Oops! Try again...")
        user_input = input("Guss my name: ")


##ex4##

names = ['Samus', 'Cortana', 'V', 'Link', 'Mario', 'Cortana', 'Samus']
user_input = input("Please Enter your Name: ")

for index,name in enumerate(names):
   if name == user_input:
      print((f"The Index of your name is: {index}"))
      break
else:
   print("Your name not in the list")

##ex5##

num1 = int(input("Input the 1st number: "))
num2 = int(input("Input the 2nd number: "))
num3 = int(input("Input the 3th number: "))

if num1 > num2 and num1 > num3:
    print(f"The greatest number is: {num1}")
elif num2 > num1 and num2 > num3 : 
    print(f"The greatest number is: {num2}")
else:
    print(f"The greatest number is:{num3}")


##ex6##

import random
wins = 0 
losses = 0

while  True:
    user_guss = input("Enter a number between 1 and 9 (or 'q' to quit): ")

    if user_guss.lower()=="q" :
        print("Thanks for playing! by")
        print(f"Total Wins:{wins}, Total Losses:{losses}")
        break
    if not user_guss.isdigit():
        print("Please enter a valid number between 1 and 9.")
        continue
    user_guss = int(user_guss)
    if user_guss < 1 or user_guss >9:
        print("Out of range! Please enter a number between 1 and 9.")
        continue
    random_number = random.randint(1,9)

    if user_guss == random_number:
        print("Winner ")
        wins+=1
    else:
        print(f"Better luck next time the winner number was {random_number}")
        losses += 1

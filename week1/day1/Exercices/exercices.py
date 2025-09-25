## ex1 ##
for i in range(0,4):print("Hello World")
## EX2 ##
print((99**3)*8)
## EX3 ##
my_name = "hicham"
user_name =  input("Plaese Enter your name: ").lower()

if my_name == user_name:
    print('wow we have the same name ")')
else:
    print("ooops! we dont have the same name ")
## EX4 ##
more_then = 145
user_tall = int(input("Please enter your height: "))
if user_tall > more_then:
    print("Tall enough to ride a roller coasterr")
else:
    print("you need to grow some more to ride")
## EX5 ##
my_fav_numbers = {6,7,10,4}
my_fav_numbers.update([11,12])
my_fav_numbers.remove(12)
print(my_fav_numbers)
friend_fav_numbers ={20,30,40,500}
our_fav_numbers = my_fav_numbers.union(friend_fav_numbers) 
print(our_fav_numbers)

## EX6 ##
    #Tuples in Python are immutable you cannot change them directly#
## EX7 ##
basket = ["Banana", "Apples", "Oranges", "Blueberries"]

basket.remove("Banana")
basket.remove("Blueberries")
basket.append("Kiwi")
basket.insert(0,"Apples")
basket.count("Apples")
basket.clear()
print(basket)

## EX8 ##
sandwich_orders = ["Tuna sandwich", "Pastrami sandwich", "Avocado sandwich", "Pastrami sandwich", "Egg sandwich", "Chicken sandwich", "Pastrami sandwich"]
finished_sandwiches=[]
while "Pastrami sandwich" in sandwich_orders:
    sandwich_orders.remove("Pastrami sandwich")
    finished_sandwiches.append("Pastrami sandwich")


print(sandwich_orders)
print(finished_sandwiches)

for i in sandwich_orders:
    print(f"I made your {i}")
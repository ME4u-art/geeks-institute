

family = {}
while True:
    
    
    if   input("If you want quit hit (q) if not hit (enter): ").lower() == "q":
        break
    else:
        user_name = input("Please Enter your name: ")
        user_age = int(input("Please Enter your age: "))
        family[user_name] = user_age

age_of_3 = list(filter(lambda name : family[name] < 3, family)) 
age_betw_3_and_12 = list( filter(lambda name : 3 <= family[name]<= 12 , family))
count1 =len(age_betw_3_and_12 ) 
cal1 = count1 * 10
age_over_12 = list(filter(lambda name:  family[name] > 12 , family))
count2 = len(age_over_12)
cal2=count2 * 15

print (f"for {age_of_3} the tikect is free ")


print (f" {count1} members between age 3 and 12 the ")
print(f"The total is :{cal1}")
print (f"{count2} memebers over age 12")
print(f"The total is :{cal2}")
print(f"family`s total cost is :{cal1 + cal2} ")

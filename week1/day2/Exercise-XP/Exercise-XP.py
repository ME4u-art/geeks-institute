##EX1##
keys = ['Ten', 'Twenty', 'Thirty']
values = [10, 20, 30]
zipped_list = zip(keys,values)
print(dict(zipped_list))
##EX2##


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
##EX3##
    #1#
brand =  {
    "creation_date":1975,
    "creator_name":"Amancio Ortega Gaona"
    ,"type_of_clothes":["men","women","children","home"],
    "international_competitors":["Gap","H&M","Benetton"],
    "number_stores":7000,
    "major_color":{"France":"blue",
                   "Spain":"red",
                   "US":"pink,green"
                   }
    }

    #2#
brand["number_stores"]=2
    #3#
clients = ", ".join(brand['type_of_clothes'])
print(f"Zara makes clothes for: {clients}")
    #4#
brand["country_creation"] = "Spain"
    #5#
if "international_competitors" in brand:
    brand["international_competitors"].append("Desigual")
    print("Key exists! and value is append ")
else:
    print("Key dosen`t exist!!! ")

    #6#
brand["creation_date"]=None
    #7#
print(brand["international_competitors"][-1])
    #8#
print(brand["major_color"]["US"])
    #9#
print(f"the  length of the dictionary is: {len(brand)}")
    #10#
key_of_dic = filter(lambda kay : True,brand)
coutn_of_key = len(list(key_of_dic))
print(f"the amount of the keys in dictionary brand: {coutn_of_key}")
    #11#
more_on_zara={
    "creation_date":1975,
    "number_stores":10000
}   
    #12#
brand.update(more_on_zara)
    #13#
print(brand["number_stores"])
#what happend is the "brand" has been update with the values of "more_on_zara" # 
##EX4##
def descrip_city(city = "Mohammeda",country="Morocco"):
    print(f"{city} is in {country}")

descrip_city()

##EX5##
import random
def guess_the_number():
    user_num = int(input("Guess the number from 1 to 100: "))
    random_num = random.randint(1, 100)
    if user_num == random_num:
        print(f"You guessed it right!! Your number {user_num} = Random number {random_num}")
    else:
        print(f"You failed to guess it. Your number {user_num} ≠ Random number {random_num}")

guess_the_number()
##EX6##
def make_shirt(**kwargs):
    size = kwargs.get('size','L')
    message = kwargs.get('message','I Love Python')
    print(f"The size of the shirt is: {size}")
    print(f"The message printed on the shirt is: {message}")
make_shirt()
make_shirt(size = "M")
make_shirt(message ="I Love java script")


##EX7##
import random
def get_random_temp(season):
    if season.lower() == "winter":
        return random.randint(-10, 16)
    elif season.lower() == "spring":
        return random.randint(5, 25)
    elif season.lower() == "summer":
        return random.randint(20, 40)
    elif season.lower() == "autumn":
        return random.randint(0, 20)


def main():
    user_input = input("please Enter a season (winter/spring/summer/autumn): ")
    the_temp = get_random_temp(user_input)
    print(f"The temperature right now is {the_temp}°C")
    
    if the_temp < 0:
        print("Brrr, that's freezing! Wear some extra layers today ")
    elif 0 <= the_temp <= 16:
        print("Quite chilly! Don't forget your coat ")
    elif 17 <= the_temp <= 23:
        print("Nice and pleasant! Perfect weather for a walk ")
    elif 24 <= the_temp <= 32:
        print("Warm and comfortable! Great day to be outside ")
    elif the_temp >= 33:  # Changed to avoid overlap
        print("It's getting hot! Stay hydrated and find some shade")
main()
##EX8##
data = [
    {
        "question": "What is Baby Yoda's real name?",
        "answer": "Grogu"
    },
    {
        "question": "Where did Obi-Wan take Luke after his birth?",
        "answer": "Tatooine"
    },
    {
        "question": "What year did the first Star Wars movie come out?",
        "answer": "1977"
    },
    {
        "question": "Who built C-3PO?",
        "answer": "Anakin Skywalker"
    },
    {
        "question": "Anakin Skywalker grew up to be who?",
        "answer": "Darth Vader"
    },
    {
        "question": "What species is Chewbacca?",
        "answer": "Wookiee"
    }
]


def ask_questions():
    correcct =0
    Incorrect =0

    start_quit = input("To play type Yes/No to quit: ").lower()
    if start_quit != "yes":
        print("GoodBye!")
        return 0, 0
    for i, q in enumerate(data, start=1):
        user_answer = input(f"For question {i}: {q['question']}: ")
        if user_answer.lower() == q ['answer'].lower() :
            print("correcct")
            correcct += 1
        else:
            print("Incorrect")
            Incorrect+= 1

            if Incorrect == 3:
                print("Play agin!!!")
                break

    return correcct, Incorrect

def score():
    correcct_cout,incorrecct_count = ask_questions()
    print(f"correcct answers :{correcct_cout}")
    print(f"Incorrecct answers:{incorrecct_count}")




score()
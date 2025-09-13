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
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
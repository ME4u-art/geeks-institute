##Challenge 1 ##
number = int(input("Enter a Number: "))
length = int(input("Enter a Length: "))

multiples  = [number * i for i in range(1,length+1)]

print(f"number:{number} - length: {length} --> {multiples}")

##challenge 2 ##

user_input = input("Enter a string: ")

if user_input:
    result = user_input[0]
else:
    result = ""

for char in user_input[1:]:
    if char != result[-1]:  
        result += char

print("String with consecutive duplicates removed:", result)
##test##

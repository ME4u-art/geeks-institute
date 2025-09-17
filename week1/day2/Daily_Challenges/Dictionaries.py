user_input = input("Please Enter a Word: ")
letter_positions = {}
for word,letter in enumerate(user_input):
    if letter not in letter_positions:
        letter_positions[letter] = []
    
    letter_positions[letter].append(word)

print(letter_positions)
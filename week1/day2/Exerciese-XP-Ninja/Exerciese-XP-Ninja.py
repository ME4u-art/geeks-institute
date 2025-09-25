##EX1##
text = "Volkswagen Toyota FordMotor Honda Chevrolet"
manufacturers_names= text.split()

print(f"there`re {len(manufacturers_names)} car companies in this list")

print(f"{manufacturers_names[::-1]}")

manufacturers_names.sort(reverse=True)
print(f"{manufacturers_names}")


for name in manufacturers_names:
      count = 0
      for letter in name:
          if letter.lower() == "o":
              count+=1
      print(f"{name}: has {count}'o'(s)")



no_i_in_them = 0 
for name in manufacturers_names:
     if "i" not in name.lower():
          no_i_in_them +=1
print(f"{no_i_in_them} manufacturers' names do NOT have the letter 'i'")

#Bouns1#
duplicates_name = ["Honda", "Volkswagen", "Toyota", "Ford Motor", "Honda", "Chevrolet", "Toyota"]
print(set(duplicates_name))

unique_name = sorted(set(duplicates_name))
comma_and_spacec = ", ".join(duplicates_name)
print(f"There are {len(unique_name)}: {unique_name}")


#Bouns2#
duplicates_name.sort(reverse=False)
for name in unique_name:
     reverse_letters = name[::-1]
     print(reverse_letters)
    

##EX2##
def get_full_name(**kwargs):
    full_name =" ".join(kwargs.values())
    print(f"Your full name is: {full_name}")

get_full_name(first ="hicham",middle_name="you",last_name="me")
##EX3##
ALPHABET_TO_MORSE = {
    'A': '.-',    'B': '-...',  'C': '-.-.',  'D': '-..',
    'E': '.',     'F': '..-.',  'G': '--.',   'H': '....',
    'I': '..',    'J': '.---',  'K': '-.-',   'L': '.-..',
    'M': '--',    'N': '-.',    'O': '---',   'P': '.--.',
    'Q': '--.-',  'R': '.-.',   'S': '...',   'T': '-',
    'U': '..-',   'V': '...-',  'W': '.--',   'X': '-..-',
    'Y': '-.--',  'Z': '--..'
}

MORSE_TO_ALPHABET = {
    '.-'   : 'A', '-...': 'B', '-.-.': 'C', '-..' : 'D',
    '.'    : 'E', '..-.': 'F', '--.' : 'G', '....': 'H',
    '..'   : 'I', '.---': 'J', '-.-' : 'K', '.-..': 'L',
    '--'   : 'M', '-.'  : 'N', '---' : 'O', '.--.': 'P',
    '--.-' : 'Q', '.-.': 'R', '...' : 'S', '-'   : 'T',
    '..-'  : 'U', '...-': 'V', '.--' : 'W', '-..-': 'X',
    '-.--' : 'Y', '--..': 'Z'
}


def en_to_morse(*args):
    morse_code = ""
    for word in args:
        for letter in word:
            if letter in ALPHABET_TO_MORSE:
                morse_code +=ALPHABET_TO_MORSE[letter]+" "
        print(f"Your word is {morse_code}")   



def morse_to_en(*args):
    alpha=""
    for word in args:
        morse_letter = word.split()
        for code in morse_letter:
            if code in MORSE_TO_ALPHABET:
                alpha +=  MORSE_TO_ALPHABET[code]
        print(f"Your word in morse code  is {alpha}")



en_to_morse("hicham".upper())
morse_to_en(".... .. -.-. .... .- --")
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
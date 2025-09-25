##ex1##
True
True
False
False
True
False
x is True
y is False
a: 5
b: 10

##ex2##


char = "a"
longest_sentence = ""
while True:
    user_input = input("Enter longest sentence without the character “A”(to stop hit q): ") .lower()
    if user_input == "q":
        print("Thnks for playing !")
        print(f"Your longest valid sentennce was:{longest_sentence}")
        break
    if char in user_input:
        print("Try agin buddy !!!")
    else:
        if len(user_input)>len(longest_sentence):
            longest_sentence = user_input
            print("Congratulation buddy You did it ")
        else:
            print("Good job, but not longer than your previous longest.")

##ex3##

import string
paragraph="Jane, I will not trouble you with abominable details: some strong words shall express what I have to say.  I lived with that woman upstairs four years, and before that time she had tried me indeed: her character ripened and developed with frightful rapidity; her vices sprang up fast and rank: they were so strong, only cruelty could check them, and I would not use cruelty.  What a pigmy intellect she had, and what giant propensities!  How fearful were the curses those propensities entailed on me!  Bertha Mason, the true daughter of an infamous mother, dragged me through all the hideous and degrading agonies which must attend a man bound to a wife at once intemperate and unchaste.".lower()

# Clean paragraph by removing punctuation
clean_paragraph = paragraph.translate(str.maketrans("", "", string.punctuation))

# Split into sentences
sentences = clean_paragraph.split(".")
sentences = [s.strip() for s in sentences if s.strip()]

# Split into words
words = clean_paragraph.lower().split()

# Calculate statistics
num_characters = len(paragraph)
num_sentences = len(sentences)
num_words = len(words)
num_unique_words = len(set(words))
num_non_whitespace_chars = len(paragraph.replace(" ", "").replace("\n", ""))
avg_words_per_sentence = num_words / num_sentences if num_sentences else 0
num_non_unique_words = num_words - num_unique_words

# Print results
print(f"Number of characters: {num_characters}")
print(f"Number of sentences: {num_sentences}")
print(f"Number of words: {num_words}")
print(f"Number of unique words: {num_unique_words}")
print(f"Number of non-whitespace characters: {num_non_whitespace_chars}")
print(f"Average words per sentence: {avg_words_per_sentence:.2f}")
print(f"Number of non-unique words: {num_non_unique_words}")

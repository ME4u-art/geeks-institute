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
birthdays = {
    "ahmed":"1999/02/02",
    "mohamed":"1998/06/20",
    "ayoube":"2007/10/25",
    "yahye":"2005/03/03",
    "hicham":"/1994/04/20"
    }

persons_name = input(f"Welcome you can look up the birthdays of the people: ").lower()
print(f"{persons_name}: {birthdays[persons_name]}")


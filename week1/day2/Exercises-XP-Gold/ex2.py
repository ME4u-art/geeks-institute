birthdays = {
    "ahmed":"1999/02/02",
    "mohamed":"1998/06/20",
    "ayoube":"2007/10/25",
    "yahye":"2005/03/03",
    "hicham":"/1994/04/20"
    }
found = False
persons_name = input(f"Welcome you can look up the birthdays of the people in the list!{list(birthdays)}: ").lower()
for name in birthdays:
    if name == persons_name:
         print(f"{name}: {birthdays[name]}")
         found = True
if not found:
    print(f"Sorry, we don’t have the birthday information for {persons_name}")
         


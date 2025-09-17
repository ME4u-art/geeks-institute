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
    

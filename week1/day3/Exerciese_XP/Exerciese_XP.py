##EX1##
class Cat:
    def __init__(self, cat_name, cat_age):
        self.name = cat_name
        self.age = cat_age

cat1 = Cat("Milo", 5)
cat2 = Cat("Luna", 3)
cat3 = Cat("Simba", 7)


def find_oldest_cat(*cats):
    return max(cats, key=lambda c : c.age)

oldest = find_oldest_cat(cat1,cat2,cat3)

print(f"the oldest cat is {oldest.name} and is {oldest.age} years old")
##EX2##
class Dog:
    def __init__(self,name,height):
        self.name = name
        self.height = height
        print(f"dog name is {name} height is {height} cm ")
    
    def bark(self):
        print(f"{self.name} gose woff!")
    
    
    def jump(self):
        print(f"{self.name} jumps {self.height *2} cm")


davids_dog=Dog("Rex",50)
davids_dog.bark()
davids_dog.jump()

sarahs_dog =Dog("Teacup",20)
sarahs_dog.bark()
sarahs_dog.jump()

if davids_dog.height > sarahs_dog.height:
    print(f"The bigger dog is {davids_dog.name}") 

elif sarahs_dog.height > davids_dog.height:
    print(f"The bigger dos is {sarahs_dog.name}")

else:
    print("Doth dohs are the same height")
##EX3##
class Song:
    def __init__(self,lyrics=[]):
        self.lyrics = lyrics

    def sing_me_a_song(self):
      for item in self.lyrics:
         print(item)

stairway= Song(["There’s a lady who's sure","all that glitters is gold", "and she’s buying a stairway to heaven"])
stairway.sing_me_a_song()
##EX4##
class Zoo:
    def __init__(self,zoo_name):
        self.name = zoo_name
        self.animals = [] 
    def add_animal(self,new_animal):
        if new_animal not in self.animals:
            self.animals.append(new_animal)
            print(f"{new_animal} has been added to the zoo.")
        else:
            print(f"the animal already in the list")

    def get_animals(self):
        for item in self.animals:
            print(f"Animals in the zoo {item}")
    def sell_animals(self,animal_sold):
        if animal_sold in self.animals:
            self.animals.remove(animal_sold)
            print(f"The animal {animal_sold} sold ")
        else:
            print(f"the {animal_sold} is not in the zoo ")
    def sort_animals(self):
        sorted_animals = sorted(self.animals)
        grouped = {}
        for animal in sorted_animals:
            first_letter = animal[0].upper()
            if first_letter not in grouped:
                grouped[first_letter]=[]
            grouped[first_letter].append(animal)
        return grouped
    
    def get_groups(self):
        grouped = self.sort_animals() 
        for key, animals in grouped.items():
            print(f"Group {key}: {animals}")


new_zoo = Zoo("New York Zoo")

new_zoo.add_animal("Tiger")
new_zoo.add_animal("Elephant")
new_zoo.add_animal("Antelope")
new_zoo.add_animal("Lion")
new_zoo.add_animal("Alligator")
new_zoo.add_animal("Leopard")


new_zoo.sell_animals("Tiger")

new_zoo.get_groups()

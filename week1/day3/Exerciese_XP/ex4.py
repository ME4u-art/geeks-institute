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


new_york_zoo.sell_animals("Tiger")

new_york_zoo.get_groups()

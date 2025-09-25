##EX1##
class Pets():
    def __init__(self, animals):
        self.animals = animals

    def walk(self):
        for animal in self.animals:
            print(animal.walk())

class Cat():
    is_lazy = True

    def __init__(self, name, age):
        self.name = name
        self.age = age

    def walk(self):
        return f'{self.name} is just walking around'

class Bengal(Cat):
    def sing(self, sounds):
        return f'{sounds}'

class Chartreux(Cat):
    def sing(self, sounds):
        return f'{sounds}'
    
class Siamese(Cat):
    def sing(self, sounds):
        return f"{sounds}"


all_cats = [Bengal("Leo", 3), Chartreux("Misty", 2), Siamese("Luna", 4)]

sara_pets = Pets(all_cats)

sara_pets.walk()
##EX2##
class Dog():
    def __init__(self,name ,age,weight):
        self.name = name
        self.age = age
        self.weight = weight
    def bark(self):
        return f"{self.name} is barking"
    def run_speed(self):
        return f" {self.name} running speed is: {(self.weight*self.age)/10}"
    def fight(self,other_dog):
        my_power = self.run_speed() * self.weight
        other_power = other_dog.run_speed() * other_dog.weight

        if my_power > other_power:
            return f"{self.name} win the fight!"
        elif my_power < other_power:
            return f"{other_dog.name} win the fight!"
        else:
            return "It`s a tie!"

dog1 = Dog("Rex", age=5, weight=20)
dog2 = Dog("Buddy", age=4, weight=18)
dog3 = Dog("bobise",age=8 ,weight = 26)

print(dog1.fight(dog2))
print(dog2.fight(dog3))
print(dog1.fight(dog3))
print(dog1.run_speed())
print(dog2.run_speed())
print(dog3.run_speed())
print(dog1.bark())
print(dog2.bark())
print(dog3.bark())
##EX3##
from ex2 import Dog
import random

class PetDog(Dog):
    def __init__(self, name, age, weight,trained = False):
        super().__init__(name, age, weight)
    def train(self):
        self.trained = True
        print(f"the dog is {self.bark()}")

    def play (self,*args):
        dog_names = [self.name]+[dog.name for dog in args]
        print(f"{', '.join(dog_names)} all play together!")

    def do_a_trick(self):
        if self.trained == True:
            tricks = [
                f"{self.name} does a barrel roll",
                f"{self.name} stands on his back legs",
                f"{self.name} shakes your hand",
                f"{self.name} plays dead"
                ]
            print(random.choice(tricks))
        else:
            print(f"{self.name} is not trained yet !")

##EX4##
class Family:
    def __init__(self,last_name,members):
        self.last_name = last_name
        if members is None:
            members = []
        self.members = members

    def born(self,**child):
        self.members.append(child)
        print(f"Congratulations! {child.get('name','A new member')} has joined the {self.last_name} family")

    def is_18(self,name):
        for member in self.members:
            if member.get("name") == name:
                return member.get("age", 0)>= 18
        print(f"No member named {name} found in the {self.last_name} family.")
        return None
    
    def family_presentation(self):
        print(f"Family {self.last_name}:")
        if not self.members:
            print("No members in the family yet.")
        else:
            for member in self.members:
                details = ", ".join(f"{key}:{value}"for key , value in member.items()) 
                print(f"  - {details}")
                
"""initial_members =[
        {'name':'Michael','age':35,'gender':'Male','is_child':False},
        {'name':'Sarah','age':32,'gender':'Female','is_child':False}
        ]
johnson_family = Family("Johnson", initial_members)

johnson_family.family_presentation()
print(johnson_family.is_18("Michael"))  
print(johnson_family.is_18("Sarah"))    
print(johnson_family.is_18("Daisy"))    

johnson_family.born(name="Daisy", age=0, gender="Female", is_child=True)
johnson_family.family_presentation()"""
##EX5##
from ex4 import Family

class TheIncredibles(Family):
    def __init__(self,last_name,members=None):
        if members is None:
            members = []
        super().__init__(last_name,members)

    def user_power(self,name):
        for member in self.members:
            if member.get("name") == name:
                age = member.get("age",0)
                if age >= 18:
                    print(f"{member['name']}`s power is {member['power']}!")
                else:
                    raise Exception(f"{member['name']}is not over 18 years old"
                                    f"(current age: {age}). Cannot use power.")
                return
            raise Exception(f"No member named {name} found in the {self.last_name} family.")
    def incredible_presentation(self):
        print("**Here is our powerful family**")
        super().family_presentation()


Incredibles =[{'name':'Michael','age':35,'gender':'Male','is_child':False,'power': 'fly','incredible_name':'MikeFly'},
              {'name':'Sarah','age':32,'gender':'Female','is_child':False,'power': 'read minds','incredible_name':'SuperWoman'}
              ]
incredible_family = TheIncredibles("Incredibles",Incredibles)
incredible_family.incredible_presentation()
incredible_family.born(
    name="Jack",
    age=0,
    gender="Male",
    is_child=True,
    power="Unknown Power",
    incredible_name="Jack-Jack"
)

incredible_family.incredible_presentation()

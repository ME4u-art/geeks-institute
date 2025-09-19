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
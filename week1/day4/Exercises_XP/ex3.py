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

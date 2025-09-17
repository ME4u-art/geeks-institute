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
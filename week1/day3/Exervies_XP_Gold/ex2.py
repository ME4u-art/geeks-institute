import random
class Mylist:
    def __init__(self,letters):
       self.letters = letters  
    
    def reversed_list(self):
        return self.letters[::-1]
    def sorted_list(self):
        return sorted(self.letters)
    def new_list(self):
       return [random.randint(0,100) for n in self.letters ]
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
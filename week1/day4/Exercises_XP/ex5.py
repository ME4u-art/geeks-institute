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

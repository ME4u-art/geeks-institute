class MenuManager:
    def __init__(self):
        self.menu=[{"name":"soup","price":10,"spice_level":"B","gluten_index":False},
                   {"name":"Hamburger","price":15,"spice_level":"A","gluten_index":True},
                    {"name":"Salad","price":18,"spice_level":"A","gluten_index":False},
                     {"name":"French_Frise","price":5,"spice_level":"C","gluten_index":False},
                      {"name":"Beef_bourguignon","price":25,"spice_level":"B","gluten_index":True}]
    def add_item(self,name,price,spice,gluten):
        new_dish = {
            "name":name,
            "price":price,
            "spice_level":spice,
            "gulten_index":gluten
        }
        self.menu.append(new_dish)
        print(f"New dish {name} add successfully")

    def update_item(self,name,price,spice,gluten):
        for dish in self.menu:
            if dish["name"].lower() == name.lower():
                dish["price"] = price
                dish["spice_leve"] = spice
                dish["gluten_index"] = gluten
                print(f"Dish '{name}' has been updated successfully!")
                return
            print(f"Dish '{name}' is not in the menu.")
    def remove_item(self,name):
        for i,dish in enumerate(self.menu):
            if dish ["name"].lower() == name.lower():
                remover_dish = self.menu.pop(i)
                print(f"Dish {remover_dish['name']}  has been removed successfully!")
                return
            print(f"Manager notice: Dish '{name}' is not in the menu.")
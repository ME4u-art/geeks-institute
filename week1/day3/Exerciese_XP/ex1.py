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
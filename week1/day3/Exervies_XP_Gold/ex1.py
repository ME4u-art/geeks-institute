import math

class Circle:
    def __init__(self,radius = 1.0):
        self.radius = radius 
    def perimeter_of_circle(self):
        Perimeter = 2 * math.pi * self.radius
        print(f"The perimeter of circle is {Perimeter}")
    def area_of_circle(self):
        Area = math.pi * self.radius**2
        print(f"Area of the circle: {Area}")
    def defi_of_circle():
        print("A circle is all the points that are exactly r units away from one central point.")

circle = Circle()

circle.area_of_circle()
circle.perimeter_of_circle()
import math
class Circle:
    def __init__(self, radius=None, diameter=None):
        if radius is not None:
            self.radius = radius
        elif diameter is not None:
            self.radius = diameter / 2
        else:
            raise ValueError("You must provide either raduis or diameter")
        
    @property
    def diameter(self):
        return self.radius*2

    @diameter.setter
    def diameter(self, value):
        self.radius = value/2

    def __add__(self, other):
        if isinstance(other, Circle):
            return Circle(radius=self.radius + other.radius)
        raise TypeError("Addition only supported between Circle instances")

    def area(self):
        return math.pi * self.radius ** 2 
    
    def __str__(self):
        return f"Circle (radius={self.radius:.2f}, diameter={self.diameter:.2f}, area={self.area():.2f})"   
    def __lt__(self,other):
        
        if isinstance(other,Circle):
            return self.radius < other.radius
        raise TypeError ("comparison is only supported between Circle instances")
    
    def __le__(self,other):
        if isinstance(other,Circle):
            return self.radius <= other.radius
        raise TypeError("Comparison is only supported between circle instances")
    
    def __eq__(self, other):
        if isinstance(other, Circle):
            return self.radius == other.radius
        raise TypeError("Comparison is only supported between circle instances")
    
    def __ne__(self, other):
        return not self == other

    def __gt__(self, other):
        return not self <= other

    def __ge__(self, other):
        return not self < other


# Example usage
c1 = Circle(radius=5)
c2 = Circle(diameter=16)

print(c1)  # Circle(radius=5.00, diameter=10.00, area=78.54)
print(c2)  # Circle(radius=8.00, diameter=16.00, area=201.06)

# Add two circles
c3 = c1 + c2
print(c3)  # Circle(radius=13.00, diameter=26.00, area=530.93)

# Compare circles
print(c1 > c2)   # False
print(c1 < c2)   # True
print(c1 == c2)  # False

# Sorting circles
circles = [c3, c1, c2]
circles.sort()
for c in circles:
    print(c)
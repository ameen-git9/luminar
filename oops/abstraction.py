'''                                                             abstraction'''


# hiding - wher we should apply the encapsulation and abstraction (  atm, beak applying - internallyy not aware, calculator ) - real life example


#  from abc import ABC,abstractclassmethod


# ABC - Abstract Base Class
# neet to inherit ABC
# must be an abstract method in the abstract class
# must inherit to child class and must there should be a abdtract method
# 
#  
from abc import ABC,abstractmethod

class Polygon(ABC):
    @abstractmethod
    def no_of_sides(self):
        print("======")
    def info(self):

        print("Polygon info")
class Triangle(Polygon):
    def no_of_sides(self):
        print("3 sides")
class Rectangle(Polygon): 
    def no_of_sides(self):
        print("4 sides")
    
# p1 = Polygon() # can't
# p1.no_of_sides()
r1 = Rectangle()
r1.no_of_sides()                       #?????????????
t1 = Triangle()
t1.no_of_sides()

 
   
# 1.write program to check a number is even or odd

# a=int(input("enter a number: "))
# if (a%2==0):
#     print("the given number is even")
# else:
#     print("the given number is odd")

# 2. write a program to find greatest number among three numbers?

# a=int(input("enter first number: "))
# b=int(input("enter second number: "))
# c=int(input("enter third number: "))
# if (a>=b and a>=c):
#     print("greater no is : ",a)
# elif (b>=a and b>=c):
#     print("greater no is : ",b)
# else:
#     print("greater no is : ",c)


# 3.writes a program to check whether given year is leap year or not?

# If the year is divisible by 400, it is a leap year.

# Else if the year is divisible by 100, it is not a leap year.

# Else if the year is divisible by 4, it is a leap year.

# Otherwise, it is not a leap 


# year=int(input("enter a year: "))
# if (year % 400 ==0):
#     print("is a leap year .")
# elif (year % 4 == 0):
#     print("is a leap year") 
# elif (year % 100 == 0):
#     print("Not a leap year")
# else:
#     print("Not a leap year")



                                    #Q.4


# age = int(input("Enter the age: "))
# sex = input("Enter the sex(M/F): ").upper()
# days = int(input("Enter the days: "))
# wage = 0
# if 18 <= age <30:
#     if sex == 'M':
#        wage =700
# elif sex == 'F':
#     wage = 750
# elif 30 <= age < 40:
#     if sex == 'M':
#         wage =800
# elif sex == 'F':
#     wage = 850
# else:
#     print("Invalid age for wage calculation")
# if wage > 0:
#     total_wage = wage * days
#     print(f"Wage per day: {wage}")
#     print(f"Total wage for {days} days: {total_wage}")



                                    #Q.5


                                    
# quantity = int(input("Enter the quantity you want to purchase; "))
# price = 100      
# total_cost = quantity * price
# if total_cost > 1000:
#     discount = total_cost * 0.10
#     total_cost -= discount
#     print(f"A discount of 10% applied. Discount amount: {discount}")
# else:
#     print("No discount. ")
#     print(f"Total cost for the user : {total_cost}")



                                    #Q.6



# a = int(input("Enter the 1st side of the triangle: "))
# b = int(input("Enter the 2nd side of the triangle: "))
# c = int(input("Enter the 3rd side of the triangle: "))
# if a==b==c:
#     print("the triangle is equilateral. ")
# elif a!=b==c:
#     print("The triangle is isosceles. ")
# else:
#     print("The triangle is scalar. ")





                                    #Q.6





# num1 = int(input("Enter first number: "))
# num2 = int(input("Enter the second number: "))
# operator = input("Enter operators (+,-,*,/): ")
# if operator == '+':
#     j=num1 + num2
# elif operator == '-':
#     j=num1 - num2
# elif operator == '*':
#     j=num1 *num2
# elif operator == '/':
#     if num2 != 0:
#         j=num1 / num2
# else:
#     j="invalid operator"
# print(f"Your answer is: {j}")



                                    #Q.7



# marks=int(input("Enter your mark: "))
# if marks < 25:
#     print("Grade:F")
# elif marks <= 45:
#     print("Grade:E")
# elif marks <= 50:
#     print("Grade: D")
# elif marks <= 60:
#     print("Grade:C")
# elif marks <= 80:
#     print("Grade: B")
# else:
#     print("Grade; A")
    

                                        #Q.7



# city=input("Enter the name of the city: ").strip().lower()
# if city == "delhi":
#     print("monument: Red Fort")
# elif city == "agra":
#     print("Monunment: Tal Mahal")
# elif city == "jaipur":
#     print("Monument: Jai Mahal")
# else:
#     print("not available")



                                        #Q.7


# lenght=int(input("Enter the lenght: "))
# breadth=int(input("Enter the breadth: "))
# if lenght==breadth:
#     print("The rectangle is a square. ")
# else:
#     print("The rectangle is not a square. ")  




class Ekart:
    def __init__(self):
        self.cart=[]  


    def add_product(self,name,quantity):
        self.cart.append((name,quantity))
        print(f"added to cart: {name} (Quantity: {quantity})")


    def remove_product(self, name):
     for item in self.cart:
        if item[0]==name:
            self.cart.remove(item)
            print(f"removed {name} from cart")
        else:
            print(f"{name}not found in cart")



    def total_quantity(self):
        total=0
        for item in self.cart:
         total+=item[1]
        print(f"Total quantity in cart: {total}")
   



    def show_cart(self):
        print("Cart :", self.cart)



person = Ekart()
person.add_product("mobile", 1)
person.add_product("laptop", 3)
person.show_cart()
person.remove_product("mobile")
person.remove_product("ball")

person.show_cart()
person.total_quantity()

#                   object oriented programming  -oop




# related fun and op wrapped together and structure - remove unwanted operations
# object, class, methods
# methods - function 
# class - blueprint of obj- design pattern - template of obj
# obj - instance of classes

# behaviour - fun\method
# attributes - variable,color

# class Mobile:
#     def calling(self):         # self - refering the current obj
#         print("calling...")


# # or
# Mobile1=Mobile()   # obj created  ''' when using obj an ref numbewr is sent as argument '''
# Mobile1.calling() # there will be an error or for fix set an parameter in the class




# class :- blueprint, design pattern, template.
# object :- instance of class.
#constructor :- special method, __init__().
# self is object

#          types of vaiables

# instance variables
# class variable/static variable

#          types of methods

# class method
# instance method
# static method




# class student:  #pascal case
#     #initializing variables.
#     def set_student(self,name,age,place,email):  #snake case,           # self = is object
#         self.name=name    #stud1.name="abc"
#         self.age=age       #stud1.age="24"
#         self.place=place
#         self.email=email
#     def student_info(self):
#       print(f"Name:{self.name}\nAge:{self.age}\nPlace:{self.place}\nEmail:{self.email}")


# stud1=student()
# stud1.set_student(f"abc",24,"calicut","ahns2gmail.com")
# stud1.student_info()

# stud2=student()
# stud2.set_student(f"ameen",22,"kavala","ameen2gmail.com")
# stud2.student_info()



#      constructor :- special method, __init__().


# class student:  #pascal case
#     #initializing variables.
#     def __init__(self,name,age,place,email):  #snake case
#         self.name=name    #stud1.name="abc"
#         self.age=age       #stud1.age="24"
#         self.place=place
#         self.email=email
#     def student_info(self):
#       print(f"Name: {self.name}\nAge: {self.age}\nPlace: {self.place}\nEmail: {self.email}")


# stud1=student("abc",24,"calicut","ahns2gmail.com")
# stud1.student_info()

# stud2=student("ameen",22,"kavala","ameen2gmail.com")
# stud2.student_info()



#               task

# class bank:
#     bank_name="SBI"  #class variable
#     def  __init__(self,name,place,mobile_no,accnt_no):
#         self.name=name
#         self.place=place
#         self.mobile_no=mobile_no
#         self.accnt_no=accnt_no
#         self.balance=1000
#     def account_info(self):
#         print(f"Name: {self.name}\nPlace: {self.place}\nMobileno: {self.mobile_no}\nAccount_number: {self.accnt_no} \ncurrent balance: {self.balance}")

#     def deposit(self,amount):
#         self.balance+=amount
#         print(f"depositted amount: {amount},  current balance: {self.balance}" )

#     def withdraw(self,amount):
#         if amount>self.balance:
#             print("Insufficient balance")
#         else:
#             self.balance-=amount
#             print(f"withdrawed amount: {amount},  current balance: {self.balance}" )


# person1=bank("ameen","kavala",8594049041,"KLGb24828429")
# person1.account_info()
# person1.deposit(2000)
# person1.withdraw(100)
# print(person1.balance)
# print(person1.bank_name)
# print(bank.bank_name)

# person2=bank("ameer","venga",8594045441,"SBI24828429")
# person2.account_info()
# person2.deposit(2000)
# person2.withdraw(200)

# person3=bank("fahiz","irumbuzhi",25454049041,"FDL24828429")
# person3.account_info() 
# person3.deposit(2000)
# person3.withdraw(300) 




# task2

# Ekart- add_products(name, quantity)
# cart= [("mobile",1)("laptop",3)]
# remove from cart (name)
# total_quantity()  #4



# class Ekart:
#     def __init__(self):
#         self.cart=[]  


#     def add_product(self,name,quantity):
#         self.cart.append((name,quantity))
#         print(f"added to cart: {name} (Quantity: {quantity})")


#     def remove_product(self, name):
#      for item in self.cart:
#         if item[0]==name:
#             self.cart.remove(item)
#             print(f"removed {name} from cart")
#         else:
#             print(f"{name}not found in cart")



#     def total_quantity(self):
#         total=0
#         for item in self.cart:
#          total+=item[1]
#         print(f"Total quantity in cart: {total}")
   



#     def show_cart(self):
#         print("Cart :", self.cart)



# person = Ekart()
# person.add_product("mobile", 1)
# person.add_product("laptop", 3)
# person.show_cart()
# person.remove_product("mobile")
# person.remove_product("ball")
# person.show_cart()
# person.total_quantity()



# class student:
#     institution="Luminar "
#     def __init__(self,name,place):
#         self.name=name
#         self.place=place
#     def student_info(self):
#         print(f"name: {self.name}\nplace: {self.place}")

# stud1=student("A",'plss')
# stud2=student("B",'ccss')
# stud1.student_info()
# stud2.student_info()
# stud1.place="kavala"
# print(stud1.place)
# print(stud2.place)
# student.institution="Luminar Technolab"
# print(stud1.institution)
# print(stud2.institution)



#     types of methods
# class method
# instance method
# static method

# class student:
#     institution="Luminar "   #class variable

#     def __init__(self,name,place):
#         self.name=name    #instance method
#         self.place=place

#     def student_info(self):  # instance method
#         print(f"name: {self.name}\nplace: {self.place}")

#     @classmethod
#     def change_data(cls):
#         student.institution="Luminar Technolab"
#         cls.institution="abc"
#         print(cls.institution)

#     @staticmethod
#     def greeting():
#         print("hello")

# stud1=student("A","calicut")
# # stud1.student_info()    
# # student.student_info()  
# student.change_data()
# stud1.change_data()
# # stud1.greeting()
# student.greeting()



#                                      Inheritance


#  single level inheritance


# class parent: # base  class
#     def parent_features():
#         print("parent features")


# class child: # base  class
#     def child_features():
#         print("child features")


# p1=parent()
# p1.parent_features()
# c1=child()
# c1.child_features()
# c1.parent_features()




# multi level inheritance

# class parent: # base  class
#     def parent_features():
#         print("parent features")


# class child: # base  class
#     def child_features():
#         print("child features")

# class child(parent):
#     def child_features(self):
#         print("child features")



# c1=child()
# c1.child_features()
# c1.parent_features()



# multiple inheritance






# hierarchical inheritance







#         method of inheritance

# super(). :- to call parent class datas to child class



# class person:
#     def __init__(self,name,place):
#         self.name=name
#         self.place=place
    
#     def info(self):
#         print(f"{self.name},{self.place}")

# class student(person):
#     def __init__(self,roll_no,sub1,sub2,x1,x2):
#         self.roll_no=roll_no
#         self.sub1=sub1
#         self.sub2=sub2
#         super().__init__()
#         #person.__init__(self,x1,x2)


#         def student_info(self):
#             print(f"{self.name}")
#             #pass


# p1=person("A","calicut")
# stud1=student(1,22,33,"A","calicut")
# # stud1.student_info()
# stud1.info()









# polymorphism





from multipledispatch import dispatch

class findsum:
    @dispatch(int,int,int)
    def find_sum(self,a,b,c):
        print(a+b+c)
    

    @dispatch(int,int)
    def find_sum(self,a,b):
        print(a+b)
    

    @dispatch(str,str)
    def find_sum(self,a,b):
        print(a+b)


a1=findsum()
a1.find_sum(2,3,4)
a1.find_sum(5,6)
a1.find_sum("ame","en")    
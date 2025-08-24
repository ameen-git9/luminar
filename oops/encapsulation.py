# constructor  - method used for initializing variables, 
#                it execute when the object of class is created  __init__().
# destructor  - delete object reference __del__().


class A:
    def __init__(self):
        print("constructed method")
    
    def info(self):
        print("instance method")

    def __del__(self):
        print("destructered method")

print("create an objecct for class A..")
obj1=A()

print("executes instance method.")
obj1.info()

print("program ended....")
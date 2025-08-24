# polymorphism


# install multipledispatch -> pip install multipledispatch
# @dispatch is a decorator provided by the multipledispatch module.
# It allows you to define multiple versions of a function based on the number and types of its parameters.
#  Why use @dispatch?
# It helps when the same logic should work differently depending on input data types.
# Makes code cleaner and easier to maintain than using many if isinstance() checks.

# What is multipledispatch?
# multipledispatch is a Python library that allows method overloading, where you can define multiple functions
#  with the same name but different type signatures (i.e., types and number of arguments).


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
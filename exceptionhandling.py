'''                                   exception handling   '''

# try
# except
# else
# finally
# except NameError:
# except ZeroDivisionError:

# n1 = int(input("enter the first number :"))
# n2 = int(input("enter the second number :"))
# try:
#     print(n1/n2)
# except:
#     print("an error generaated")
# print(n1*n2)
# o/p
# enter the first number :89
# enter the second number :0
# an error generaated
# 0

# n1 = int(input("enter the first number :"))
# n2 = int(input("enter the second number :"))
# try:
#     n1/n2
# except:
#     print("an error generated")
# else:
#     print(n1/n2)
# finally:
#     print("finally block executed")
# print(n1*n2)
# o/p
# enter the first number :12
# enter the second number :0
# an error generated
# finally block executed
# 0

# n1 = int(input("enter the first number :"))
# n2 = int(input("enter the second number :"))
# try:
#     print(n1/n2)
#     print(x)
# except ZeroDivisionError:
#     print("Zero Division Error")
# except NameError:
#     print("name error")
# except:
#     print("something else")

# enter the first number :12
# enter the second number :0
# Zero Division Error
# enter the first number :12
# enter the second number :12
# 1.0
# name error
'''                                                user defined exception classes   '''

# create a class name the exception name 

# class ValueLargeError(Exception):  # need to use Exception classs for creatig the exception int the brackets - class ExceptionName(exception):
#     pass
# class ValueSmallError(Exception):
#     pass 

# x = 10

# while True:
#     n = int(input("Enter the number: "))
#     try:
#         if n<x:
#             raise ValueSmallError
#         elif n>x:
#             raise ValueLargeError
#         else:
#             print("Correct! ")
#             break
#     except ValueSmallError:
#         print("Value small")
#     except ValueLargeError:
#         print("Value Large")
#     finally:
#         print("Good PLay")

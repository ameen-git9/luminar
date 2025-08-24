#math, random, datetime
# import math
# print(math.sqrt(45))
# print(math.factorial(5))
# print(math.sin(9))
# print(math.cos(90))

# import random
# print(random.random())
# print(random.randint(10,100))  #otp verification.  we get random numbers
# print(random.choice([1,2,3,4,5]))  #choose given numbers
# print(random.choice("ameen"))


# import datetime
# print(datetime.date.today())  #2025-07-10
# print(datetime.date.today().year)  #2025
# print(datetime.date.today().month)  # 7
# print(datetime.date.today().day)   #10
# print(datetime.time(11,45,34))

# from datetime import datetime
# # print(datetime.now())
# full_date=datetime.now()
# print(full_date)
# print(full_date.strftime("%y"))
# print(full_date.strftime("%Y"))
# print(full_date.strftime("%m"))
# print(full_date.strftime("%d"))
# print(full_date.strftime("%a"))
# print(full_date.strftime("%A"))
# print(full_date.strftime("%b"))
# print(full_date.strftime("%B"))



# from datetime import datetime
# full_date=datetime.now()
# print(full_date.strftime("%d %B %Y")) # 10 July 2025




# lambda functions
# anonymous function
# lambda arguments : expression

# map(), filter(), reduce()

# def find_sum(x,y):
#     return x+y
# print(find_sum(2,3))


# f=lambda x,y,z:x+y
# print(f(4,5,6))
# print(f())

l=[10,11,12,13,14,15]
res=list(map(lambda i:i**2,l))
print(res) # [100, 121, 144, 169, 196, 225]



                        #filter()

# l=[10,11,12,13,14,15]
# res=list(filter(lambda i:i%2==0,l))     #[10, 12, 14]                
# # res=list(map(lambda i:i%2==0,l))  #[True, False, True, False, True, False]
# print(res)    


# import functools
# l=[10,11,12,13,14,15]
# print(functools.reduce(lambda i,j:i+j,l))


# refers:-
# iterators, generation, decorators.



                     # function recursion

# def find_factorial(n):
#     if n==1:
#         return 1
#     else:
#         return n*find_factorial(n-1)
# n=int(input("input the number: "))
# print(find_factorial(n))




#  iterators, generation, decorators.



# print("Hello, World!")
# print("ameen")
# print("Hello, Ameen!")
# name=input("Enter your name: ")
# print("my name is ",name)

# age=input("Enter your age: ")
# if age>"18":
#     print("you can vote .")
# else:
#     print("you cannot vote .")

# a = int(input("a=12"))
# b = int(input("b=3"))
# c = a + b
# print(c)
# num1=input("Enter first number: ")
# num2=input("Enter second number: ")     
# sum=num1 + num2
# print(sum)


# num=int(input("Enter a number: "))
# result=0
# while num>0:
#     rem=num%10  #3
#     result=result*10+rem  #0*10+3=3
#     num//=10
# print(result)  #3
# print(num)


# num=int(input("Enter a number: "))
# result=0
# temp=num  #3
# while num>0:
#     rem=num%10  #3
#     result=result*10+rem  #0*10+3=3
#     num//=10
# print(result)  #3
# if result==temp:
#     print("The number is a palindrome")
# else:
#     print("The number is not a palindrome")



                       # june 25



# for i in range(10):  # 1 to 5
#     for j in range(i):  # 1 to row.( row +1)
#         print("*", end=" ")
#     print()  # new line after each row  


# for row in range(7):  # 1 to 5
#     for col in range(7-row):  # 1 to row.( 7-row)
#         print("*", end=" ")
#     print() 

# # 
# for row in range(7):  # 1 to 5
#     for col in range(7-row):  # 1 to row.( 7-row)
#         print(" ", end=" ")
#     for col in range(row+1):
#         print("*",end=" ")  #print star   
#     print()
#  
# for row in range(7): 
#     for col in range(7): 
#         if row==0 or row==6 or col==0 or col==6:
#             print("*", end=" ")
#         else:
#             print(" ", end=" ")  
#     print() 



# for row in range(7):
#     for col in range(7):
#         if (row==0 or row==6) and (col!=6) or (col==0 or  col==6) and (row!=0 and row!=6):
#             print("*", end=" ")
#         else:
#             print(" ", end=" ")  
#     print() 

   

   
# for row in range(7):
#     for col in range(7):
#         if (row==0 and col!=0 and col!=6) or (col==0 or col==6) and row!=0 or(row==3):
#             print("*", end=" ")
#         else:
#             print(" ", end=" ")  
#     print() 

    
    
    
   

                          # june 26



# numbers=[10,11,12,13,15,16,17]
# for i in numbers:
#     if i%2==0:
#          print(i)


# numbers=[10,11,13,14,15]
# for i in numbers:
#     i**2
#     print(i**2)


# numbers=[10,11,14,15,16]
# sum=0
# for i in numbers:
#     sum+=i
#     print(sum)


# numbers=[10,11,12,13,14,15,16,89]
# for i in numbers:
#     for j in numbers:
#         if i<j:
#             large=j
# print(large)
# print(max(numbers))
# print(min(numbers))
# print(sum(numbers))


#flow control statements /loop control statements
#break,continue,pass


# numbers=[10,11,12,13,14,15]
# for i in numbers:
#     if i%5==0:
#         break
#     else:
#         print(i)

    # output







# numbers=[10,11,12,13,14,15]
# for i in numbers:
#     if i%5==0:
#         continue
#     else:
#         print(i)

     # output







# class student:
#      pass


# number=100
# while True:
#     n=int(input("guess the number:"))
#     if n < number:
#         print("the number is smaller than guess number, guess again:  ")
#     elif n > number:
#         print("the number is greaterthan  guess number, guess again: ")
#     else:
#         print("congrats, You won")
#         break
     

# n=1
# for row in range(7):
#     for col in range(row+1):
#         print(n,end=" ")
#         n+=1
#     print()



# for i in range(7):
#     for j in range(7,i,-1):
#         print(j,end="")
#     print() 


# 7654321
# 765432
# 76543
# 7654
# 765
# 76
# 7





          #                 june 27




        #   data types
        #   1.mutable - list,set,dictionary
        #   2.immutable - int, float,complex,str,tuple,bool
        # range[start:end:step]= (slicing)

# s="good morning"
# print(s[0:4:1])
# print(len(s))  # len9(s)    (a lenght of a string)

#string methods

# s="good morning"
# print(s.upper()) #o/p= GOOD MORNING
# print(s.lower()) #o/p= good morning
# print(s.title()) #o/p= Good Morning
# print(s.capitalize())  #o/p= Good morning
# print(s.isupper()) # o/p= check all letters are capital
# print(s.islower()) # o/p= check all letters are lower case
# print(len(s.strip())) # to remove first and last blank space
# print(len(s.lstrip())) #remove fisrt blank spaces
# print(len(s.rstrip())) # remove last blank spaces
# print(s.split())  #to split with space
# print(s.split("m"))  # to split with space excluding m


# s=("good morning")
# print(s.replace("morning","evening")) # to replace morning to evening
# print(s.replace("g","*")) # to replace g to *
# print(s.replace("g","*",2))   #to replace 2 g to *



# print(s.ljust(16,"*"))
# print(s.rjust(16,"*"))
# print(s.center(16,"*"))


# print(s.startswith("good"))  # to check starting with good
# print(s.endswith("good morning"))  # to check ending with good morning



# s=("12345")
# print(s.isnumeric())
# print(s.isalpha())
# print(s.isalnum())
# print(s.isspace())


# s="abc @123"
# alpha=0
# numbers=0
# space=0
# special=0
# for i in s:
#     if i.isalpha():
#         alpha+=1
#     elif i.isnumeric():
#             numbers+=1
#     elif  i.isspace():
#             space+=1
#     else:
#         special+=1
# print("alphabets: ",alpha,"numbers: ",numbers,"space: ",space,"special: ",special)
        





                                   #june30




# s="python programming"
# print(s.index("o"))
# print(s.index("p"))
# print(s.index("x"))
# print(s.find("programming"))
# print(s.find("programming"))
# print(s.rfind("r")) #rfind is used for count rightside
# print(s.count("r")) # to find the characters count.

# del s   #to delete the string.


# s="python programming"

# print(s.replace("p","*",2))

# append
# extend    used to insert 
# insert

# num=[1,2,3,4,5,6,7,8]
# odd=[]
# even=[]
# for i in num:
#   if i %2==1:
#     odd.append(i)
#   else:
#     even.append(i)
# print(odd)
# print(even)

# [1, 3, 5, 7]
# [2, 4, 6, 8]


                                   #july 01



                                 
# a=[1,2,3,4,5,6,7,8,"python"]
# a.pop(1)
# print(a)
# a.remove("python")
# a.remove(8)
# print(a)

# num=int(input("enter the number: "))
# l=[10,20,30,40,50,60]
# if num in l:
#   l.remove(num)
#   print(l)

# l=[10,20,30,10,30,40,50]
# result=[]
# for i in l:
#   if i not in result:
#     result.append(i)
# print(result)

# Question?

# r = [1,2,3,4,5]
# result=[]
# for i in r:
#     result.append((i,i**2))
# print(result)


# new_list=[expression for item in iterable if candition]

# result=[i for i in range (1,11)]
# print(result)

# even=[i for i in range (1,11) if i%2==0 ]
# print(even)


# square=[i**2 for i in range (1,11)]
# print(square)


# numbers=[1,2,3,4,5]
# square=[(i,i**2) for i in numbers ]
# print(square)


## new_list=[expression1 if condition1 else expression2 for item in iterable ]
## new_list=[expression1 if condition1 else expression2  if condition2 else expression3 if condition3 else expression 4 for item in iterable ]



# n=[1,2,3,4,5]
# result=["even" if i%2==0 else "odd" for i in n]
# print(result)


# result=[(i,i**2) if i%2==0 else (i,i**3)for i in range (1,11)]
# print(result)
# [(1, 1), (2, 4), (3, 27), (4, 16), (5, 125), (6, 36), (7, 343), (8, 64), (9, 729), (10, 100)]


# to sort...

# r=[10,23,4,45,66,56]
# r.sort(reverse=True)
# # r.sort()
# print(r)


# l1=[10,20,30,40,50]
# l2=l1.copy()
# l1[0]=100                  [100, 20, 30, 40, 50]
# print(l1)                   [10, 20, 30, 40, 50]
# print(l2)



# l1=[10,20,30,40,50]
# print(l1.count(10))
# print(l1.index(20))
# print(sum(l1))
# print(min(l1))
# print(max(l1))


# a=10
# r=20
# a=a+r #30 8
# r=a-r #     10
# a=a-r #
# print(a,r)

# first=0
# second =1
# for i in range(10):
#   print(first)
#   next=first+second
#   first=second
#   second=next



                                       #july 02


# or not..
# q=int(input("Enter the number: "))
# prime=True
# for i in range (2,q):
#   if q %i==0:
#     prime=False
#     break
# if prime:
#   print(f"{q} is prime")
# else:
#   print(f"{q} is not prime. ")


# for num in range (10,101):
#   prime=True
#   for i in range (2,num):
#      if num % i == 0:  
#        prime = False
#        break
#   if prime: 
#      print(num)



#armstrong number..
# a=int(input("Enter the number: "))
# lenght=len(str(a))
# temp=a
# result=0
# while n>0:
#   rem=n%10
#   result+=rem**lenght
#   n//=10
# if temp==





  # dictionary - mutable
  # keys - immutable, duplicate not allowed
  # values - any data types
  # dict={key:value}
  # dict={}
  # dict2=dict()
# student={"name":"abc","place":"calicut","age":22}
# print(len(student))
# print(student)
# print(student["name"])
# print(student["place"])
# student["place"]="kozhikode"
# student['email']="ar@gmail.com"
# print(student)



                                       #july 03




# print(student.get("email","not available"))


# student={"Name":"ameen","mark":"23","grade":"E"}
# print(student.get("mark"))
# print(student.values())
# print(student.keys())
# print(student.items())   # tuple aayt print cheyyan

#update                    #listk add cheyyan vendi 

# student.update({'phone':8594049041})
# student.update({'grade':"a"})
# print(student)

#pop()                       #listn valuesne remove cheyyanum return cheyyanum


# student={"Name":"ameen","mark":"23","grade":"E"}
# # student.pop("grade")


#popitem()

# student.popitem()
# student.clear()
# del student["mark"]
# del student
# print(student)

# d={}
# for i in range(5):
#     a=int(input("enter the key: "))
#     b=input("enter the value:")
#     #d[key]=value
#     d.update({a:b})
# print(d)

# d={}
# for i in range(len(keys)):
    








# list1=[10,20,30,10,30,40,20,30]
# d={}
# for i in list1:
#   d.update({i:list1.count(i)})
# print(d)
  
    #  or

# list1=[10,20,30,10,30,40,20,30]
# d={}
# for i in list1:
#   if i not in d:
#     d.update({i:1})
#   else:
#     d[i]+=1
# print(d)


                                       #july 04



#set - mutable (unordered), elememts epalum immutable aavanm, there is no duplicates print
# list1=[1,2,3,4,1,3]
# set1=set()
# set2={10,"python",True,10,"python"}
# # print(type(set2))
# print(type(set1))
# print(set2)

# list1=["python",10,"python",20,30,10]
# set1=set(list1)
# print(list(set1))

# set1={"python",10,"python",20,30,10}
# print(set1)



# set methods.
# add()   #immutable arguments mathre add cheyyan potollu

# set1={10,20,30,40}
# set1.add("ameen")
# set1.add(10)
# set1.update(("a","b","c"))
# set1.update("ameen")
# print(set1)

# set1={10,20,30,40,"a"}
#       # remove()
# # set1.remove(10)
# #       # discard()
# # set1.discard(40)   
#       # pop()
# # set1.pop()
# # print(set1.pop()) #set1.pop() is print the removed item
# # set1.clear()
# # del set1
# print(set1)

# set1={1,2,3,4}
# set2={3,4,5,6}
# print(set1.union(set2))     #{1, 2, 3, 4, 5, 6}
# print(set1.intersection(set2))   #3, 4}
# print(set1.difference(set2))   #{1, 2}
# print(set2.difference(set1)) #{5, 6}
# print(set2.symmetric_difference(set1))   #{1, 2, 5, 6}


#tuple  - is a immutable, itearble, indexing, slicing, duplicates, datatypes any

# t1=(10,20,30,40,40)
# t2=10,20,30,40
# t3=()
# t4=tuple()
# t5=(10,)
# t6=10,
# print(type(t1))
# print(type(t2))
# print(type(t3))
# print(type(t4))
# print(type(t5))
# print(type(t6))
# print(t1.index(30)) #position print cheyyum
# print(t1.count(40)) #count of 40


#packing and unpacking


# numbers=(10,20,30,40,4)
# a,b,c,*d=numbers
# a,b,*c,d=numbers 
# *a,b,c,d=numbers          
# print(a)
# print(b)
# print(c)
# print(d)
# * using for pack more number
# [10, 20]
# 30
# 40
# 4


# name="ameen"
# age=22
# print("my name is {} and my age is {}".format(name,age)) #default formating
# # print{f"my name is {name}and my age is {age}"}


# path=r""




                                       #july 08 functions



# python functions

# ^block of code which is executed only when it is called

# ^builtin function
#     -> print(), len(), type(), int()

#  ^ lambda function

#  ^ recursive function   

# ^user_defined functions.
#    ->syntax
#    def function_name(): #function definition
#     block of statements

#    function_name(arguments)  #function call


# example:-

# def find_sum(n1,n2):
#   s=n1+n2
#   print(s)
# find_sum(19,20)  
# find_sum(1045,1290)

# output
# 39
# 2335

# Docstring
# def find_sum(n1,n2):
#   '''returns the sum of two numbers
  
#        '''
#   s=n1+n2
#   print(s)
# find_sum(12,36)  
# # print(find_sum.__doc__)
# # print(print.__doc__)
# # print(len.__doc__) 


# def find_sum(n1,n2=0,n3=0):  #default parameter value
#   s=n1+n2+n3
#   print(s)
# find_sum(12,36,40)  
# find_sum(12,36)  
# find_sum(20)

# output
# 8
# 48
# 20


# keyword arguments
# def user_info(name,age):
#   print(f"Name:{name}\nAge:{age}")
# user_info(age=22,name="ameen") #key arguments 

#arbitrary arguments  (*args)

# def find_sum(*args):  #arbitrary arguments
#   print(sum(args))
# find_sum(1,2)
# find_sum(34,56,12)
# find_sum(12,34,56,78,90)  



# def user_info(**kwargs):  #arbitrary keyword argument
#   print(kwargs)
#   print(kwargs.get("name"))
# # user_info(age=22,name="ameen") #keyword arguments
# user_info(age=22,name="ameen",place="calicut") #keyword arguments

  #  module = python file 
  #  package = collections of module











# new_list=[expression for item in iterable if candition]
# result=[i for i in range (1,11)]
# print(result)
## new_list=[expression1 if condition1 else expression2 for item in iterable ]
## new_list=[expression1 if condition1 else expression2  if condition2 else expression3 if condition3 else expression 4 for item in iterable ]
# data = [[10,23,45,90],[23,24,25],[32,31,34,35,36]]
# list = []
# for i in data:
#   for j in i:
#     list.append(j)
# print(list)
# data = [[10,23,45,90],[23,24,25],[32,31,34,35,36]]
# result = [i for j in data for i in j]
# print(result)
# [10, 23, 45, 90, 23, 24, 25, 32, 31, 34, 35, 36]

# result = [(i,i**2) if i%2==0 else (i,i**3)for i in range(22,31)]
# print(result)


# for i in range (22,31):
#   if i%2==0:
#     print(i**2)
#   else:
#     print(i**3)
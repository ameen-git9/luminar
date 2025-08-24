'''

                                                                        # All methods and functions 

print()
input()
type()
range()

int()
float()
str()
bool()
tuple()
list()
set()

min()
max()


...............................................................................................#str
slicing - string[start:end:step]
.upper()
.lower()
.title() - change every 1st letter to CAPITAL
.capitalize() - change only first letter to CAPITAL
.islower()
.isupper()
len()
.strip() - removes 1st and last blank spaces
.lstrip() - removes 1st blank space
.rstrip() - removes last blank space
.split()  - s.split(",") - it will seperate words by ,
.replace() - .replace("from","to",count)
.ljust() - .ljust(count,"what") - # Good******
.rjust() - # ******Good
.center() - # ***Good***
.startwith() - returns booleon
.endwith()
.isnumeric()
.isalpha()
.isalnum()
.index()
.find() - returns lowest value
.rfind() - start with right side, return highest value
.count()
del string

.formate()
    # print("my name is {} and age is {}".format(name,age)) # my name is manu and age is 24         #default formatting  
    # print("my name is {1} and age is {0}".format(age,name)) # my name is manu and age is 24       # positional formatting
    # print("my name is {y} and age is {x}".format(x=age,y=name)) # my name is manu and age is 24   #keyword formatting

path in sring

# path = r"c:\newpython\task1"     # using "r" for raw string like "f" in printing



....................................................................................................#list
slicing - # s[-1][0:6] string[select element][start:end]
.append() - to last 
.insert() - to specific - insert(pos,what)
.extend() - iterable multiple values
.pop()
.remove()
.clear()
.sort()
.reverse()
.sort(reverse=True)
del name
len()
---------# list comprehension
new_list = [expression for item in iterable if condition]
new_list = [expression1 if condition1 else expression2 if condition2 ... else expression_N for item in iterable]

.copy() - we cant assign a list to another list if want so then need to use .copy() method - # l1=l2.copy

#swapping without 3rd variable
a=a+b
b=a-b
a=a-b

..................................................................................................#Dictionary
dict={"key":"value"}
.get()
.keys()
.values()
.items() - returns each key:value as tuples
.update() - update("key":"value")
.pop("key") - argument must
.popitem() - last item will remove and returned
.clear()
del name


...................................................................................................#set
#no duplicate values
set() - for initialising empty set otherwise it will be dic - set = set()
.add() - single values
.update() - iterable values only
.remove() - if not exist ERROR
.discard() - no error if not exist
.pop() - random elements
.clear()
del name
.union() - a.union(b)
.intersection()
.difference()
.symmetric_difference()


..................................................................................................#tuple
# () not manditory but COMMA is MANDITORY
t = (1,2,3)
t1= 1,2,3    # both are tuple
t = ()       #empty
t = tuple()  # empty
t = (10)    #int
t = (10,)   #tuple    #COMMA is Manditory
t = 10,     #tuple
.index()
.count()
---------# Tuple - packing and unpacking
a,b,c,d = number 
    # each element in number is assigned to seperate variable a,b,c,d
    #the variable count and element count must be same
a,b,c, *d = t
a,b,*c,d = t
    #if lots of elements

.........................................................................#functions

def fun(*args) - multi value
def fun(**kwargs) - multi var

.........................................................................#recursivefunction
........................................................................#lambdaFunction

# lambda (arguments:expression,list)
map() - gives full result
filter() - filtered only
reduce() - need "functool" to import - return only single result



........................................................................#package

__init__.py - in the folder

'''
# from datetime import datetime
# print(datetime.date.today())    # current date
# print(datetime.time(11,45,34))    # op 11:45:34
# print(datetime.now()) # date and time
# print(datetime.date.today().year) # year
# print(datetime.date.today().month) # month
# print(datetime.date.today().day) # day

# full_date = datetime.now()
# print(full_date) # 2025-07-10 11:53:30.242611
# print(full_date.strftime("%y")) # 25
# print(full_date.strftime("%Y")) #2025
# print(full_date.strftime("%m")) # 07                               .strftime()
# print(full_date.strftime("%d")) # 10
# print(full_date.strftime("%a")) # thu
# print(full_date.strftime("%A")) # Thursday
# print(full_date.strftime("%b")) # jul
# print(full_date.strftime("%B")) # July

'''

....................................................................#regularExpression

# res = re.search(pattern,password) 
# re.findall(pattern,string) -
# re.finditer(pattern,string) -    
# re.sub(from,to,where) - replace 
# re.split(what,where) - 
# res = re.search(pattern,password) :
    # res.start() - returns the first occurense
    # res.end() - end position

\d - num
\s - space

# "abc" - 
# [abc] - 
# [0-9] - 
# "^abc" - 
# "p$" - 
# "in*" -     
# * - 0 or more occurence
# + - 1 or more occurence
# a? - atmost one a
# | -  a|b or 
# a.b - first and last must. in between any - total 3 char
# ?=  - must one

# \A - ^ (only one word )
# \Z - $
# \b - \bp start - p\b end - every word starting and ending with p (no special charectors)
# \d - numbers
# \D - not digit returns all element except number 
# \s - returns space 
# \S - returns all not space elements 
# \w - word charectors (0-9,a-z and _ )
# \W - non word charectors


...................................................................................
# id() - address
# dir() - all atributes or methods
'''


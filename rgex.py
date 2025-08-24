# re (regular expression)
# import re
# password="234@ars"
# pattern=r"\d" #\d number aanoon check cheyyaan
# print(re.search(pattern,password))
# if re.search(pattern,password):
#     print("valid password")
# else:
#     print("invalid password")    


# import re
# password="234@ars"
# pattern=r"\d" #\d number aanoon check cheyyaan
# print(re.search(pattern,password))
# print(re.findall(pattern,password))
# resp=re.finditer(pattern,password)
# print(re.sub(pattern,"*",password))  # sub is used here to remove numbers to *, ***@ars, print(re.sub(from,"to",where))
# print(re.split(pattern,password))    # ['', '', '', '@ars']



# import re
# user = input("enter the user: ")
# pattern = "[123]"
# pattern = "[0-9]"
# pattern = "[0-9a-z]"   #['a', 'b', 'c', '1', '2', '3']
# pattern = "[0-9a-z@]"
# pattern = "^c"                                                               # ^ is used start with c
# pattern = "c$"                                                               # $ is used for ends with c
# print(re.search(pattern,user))                                               # a+ -> abc,aabc
# print(re.findall(pattern,user))                                              # a* -> bc,abc
# if re.search(pattern,user):                                                  # a? -> atmost one   a,b,c
#     print("valid user")                                                      # (a|b) -> 
# else:
#     print("invalid user")

# import re
# user = input("enter the user: ")
# pattern = "^[0-9]{10}$"
# print(re.search(pattern,user))
# print(re.findall(pattern,user))
# if re.search(pattern,user):
#     print("valid user")
# else:
#     print("invalid user")
    



# import re
# user = input("enter the user: ")
# pattern = "^[6,7,8,9][0-9]{9}$"
# print(re.search(pattern,user))
# print(re.findall(pattern,user))
# if re.search(pattern,user):
#     print("valid user")
# else:
#     print("invalid user")



    # user-  min. 8characters, alphabet, number, special character,


# import re
# user = input("enter the user: ")
# pattern = "[0-9][a-z][A-Z][#$%&*@]{8}"
# print(re.search(pattern,user))
# print(re.findall(pattern,user))
# if re.search(pattern,user):
#     print("valid user")
# else:
#     print("invalid user")


# import re
# User_number = input("enter mobile no.: ")
# pattern = "^(\+91[\s\-]?)?([3-7][0-9]{10})$"
# if re.search(pattern,User_number):
#     print("valid numder")
# else:
#     print("invalid number")    




# import re
# user_email = input("Enter your Email: ")
# pattern = "^[a-z0-9\.]{3,15}@[a-z]{4,6}\.[a-z]{2,3}$"    
# if re.search(pattern,user_email):
#     print("valid email.")
# else:
#     print("invalid email.")


# abc@gmail.com

'''
n = int(input().strip())
if n%2==1:
    print("weird")
elif n%2==0 and 2<=n<=5:
    print("Not Weird")
elif n%2==0 and 6<=n<=20:
    print("Weird")
elif n%2==0 and n>20:
    print("Not Weird")
'''
# .* 

import re

T = int(input("enter the number: "))
for _ in range(T):
    pattern = input()
    try:
        re.compile(pattern)
        print("True")
    except re.error:
        print("False")

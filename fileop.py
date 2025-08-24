#file operations

# methods:-

# open() = open a file and we read and write that file, and also create a new file
#  read() = used to read a  file
#  write() = used to write a text to a file
#  remane(),
#  remove(),
#  close()  = file open cheythaal adh close cheyyan vendit
# seek()
# tell()

#           modes
# a = add cheyyan
# w =  write cheyyan
# r = file read cheyyan
# r+ = already ille textil write cheyyaan
# x = to create new file



# open()
# open a file and we read and write that file, and also create a new file

# open(filepath,mode)
# mode= r- read   = filethe text read cheyyaan
#       w- write  =oru filel text add cheyyan

# f=open("ameen.txt","r")
# print(f.read())
# f.close

# with open("ameen.txt")as f:
#     print(f.read())

# with open("ameen.txt","w")as f:
#     f.write("hello")

# f=open("ameen1.txt","w")      # its create new file naming ameen1.txt
# f.write("welcome")            # aa file welcome nna text indavm
# f.close


# f=open("ameen.txt","r")
#  print(f.read())    # read()   = execute the file
# print(f.readline())   # readline()  = line by line execution , cant print all in one, oroo thavala kodthale print cheyyollu
# print(f.readlines())  # readlines() =  print all line in list. output=['hello\n', 'hi\n', 'ad']
# f.close  

# f=open("ameen.txt","r")
# print(f.read(2))  

# f = open("ameen3.txt","r")
# list=f.readlines()
# print(len(list))  #13,  total lines in ameen3.txt.
# f.close

# f = open("ameen3.txt","r")
# r=f.readline()
# list = r.split()
# print(len(list))  #25, total words in 1st line.


# f = open("ameen3.txt","r")
# r=f.read()
# list = r.split()
# print(len(list))  #220,  total words in ameen3.txt


# f=open("ameen3.txt",'r')
# r=f.readlines()
# count=0
# for line in r:
#     if line.startswith("i") and line.startswith("I"):
#         count+=1
# print(count)


# f=open("ameen3.txt","r+")
# print(f.read())
# f.write("ameen")







#                         exception handling

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




#             user defined exception classes

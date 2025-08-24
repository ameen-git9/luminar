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





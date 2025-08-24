# m=int(input("enter the number: "))
# for i in range(m):
#     for j in range(i):
#      print("*",end=" ")
# print()

# n=1
# for i in range(7):
#     for j in range(1,7,-i):
#         print(j,end=" ")
#         n+=1
#     print()
   

    # def reverse_list(lst):
#     reversed_list = []
#     for i in range(len(lst)-1, -1,-1):
#         reversed_list.append(lst[i])
#     return reversed_list

# print(reverse_list([1, 2, 3, 4]))


# def common_elements(a, b):
#     return [item for item in a if item in b]

# print(common_elements([1, 2, 3], [2, 3, 4]))


# def find_pairs(lst, target):
#     pairs = []
#     for i in range(len(lst)):
#         for j in range(i+1, len(lst)):
#             if lst[i] + lst[j] == target:
#                 pairs.append((lst[i], lst[j]))
#     return pairs

# print(find_pairs([1, 2, 3, 4, 5], 6))



# Section 1 – Basic Python
# String & List Manipulation

# 1. Write a program to:

# Take a sentence as input.

# Reverse the words but keep their order.

# Example:
# Input: "Python is fun"
# Output: "nohtyP si nuf"

# 2. Find Second Largest Number

# Given a list of integers, find the second largest without using max() more than once or sorting.

# 3. Palindrome Check

# Check if the given string is a palindrome (ignore spaces and case sensitivity).

# 4. Dictionary Frequency Count

# Given a string, count the frequency of each character and print the result as a dictionary.

# 1. Write a program to:

# Take a sentence as input.

# Reverse the words but keep their order.

# Example:
# Input: "Python is fun"
# Output: "nohtyP si nuf"

# sent = "man in love"
# words = sent.split()
# rev_words =[]
# for i in words:
#     result = i[::-1]
#     rev_words.append(result)
# reverse = rev_words
# print(reverse)


# even or odd

# user=int(input("enter the number: "))
# if user%2==0:
#     print(f"number{user} is even.")
# else:
#     print(f"number {user} is odd. ")
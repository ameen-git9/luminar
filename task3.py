# class Ekart:
#     def __init__(self):
#         self.cart=[]  


#     def add_product(self,name,quantity):
#         self.cart.append((name,quantity))
#         print(f"added to cart: {name} (Quantity: {quantity})")


#     def remove_product(self, name):
#      for item in self.cart:
#         if item[0]==name:
#             self.cart.remove(item)
#             print(f"removed {name} from cart")
#         else:
#             print(f"{name}not found in cart")


#     def total_quantity(self):
#         total=0
#         for item in self.cart:
#          total+=item[1]
#         print(f"Total quantity in cart: {total}")
   

#     def show_cart(self):
#         print("Cart :", self.cart)

# person = Ekart()
# person.add_product("mobile", 1)
# person.add_product("laptop", 3)
# person.show_cart()
# person.remove_product("mobile")
# person.remove_product("ball")
# person.show_cart()
# person.total_quantity()


# Print consecutive numbers from 1 to 10
# for i in range(1, 11):
#     print(i)

# n = int(input("enter the number:"))
# for i in range(1, n+1):
#     print(i, end='')


    # Print consecutive numbers in a single line from 1 to n
    # for i in range(1, n + 1):
    #     print(i, end='')


# s = 'bsskJBJSSDE39Y321'
# print(any(c.isalnum() for c in s))
# print(any(c.isalpha() for c in s))
# print(any(c.isdigit() for c in s))
# print(any(c.islower() for c in s))
# print(any(c.isupper() for c in s))


# print(any(c.isalnum() for c in s))
# print(any(c.isalpha() for c in s))
# print(any(c.isdigit() for c in s))
# print(any(c.islower() for c in s))
# print(any(c.isupper() for c in s))

s = 'bsskJBJSSDE39Y321'
for c in s:
    print(c.upper())
    print(c.lower())
    print(c.isdigit())
    print(c.isalpha())
    print(c.isalnum())
        
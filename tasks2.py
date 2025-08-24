phonebook = {}
def add_contact():
    name = input("Enter name: ")
    phone = input("Enter phone number: ")
    email = input("Enter email: ")
    phonebook[name] = {"phone": phone, "email": email}
    print(f"Contact {name} added successfully.\n")
def view_contacts():
    if not phonebook:
        print("Phonebook is empty.\n")
    else:
        for name, details in phonebook.items():
            print(f"Name: {name}")
            print(f"  Phone: {details['phone']}")
            print(f"  Email: {details['email']}\n")
def update_contact():
    name = input("Enter name to update: ")
    if name in phonebook:
        phone = input("Enter new phone number: ")
        email = input("Enter new email: ")
        phonebook[name] = {"phone": phone, "email": email}
        print(f"Contact {name} updated successfully.\n")
    else:
        print(f"Contact {name} not found.\n")
def delete_contact():
    name = input("Enter name to delete: ")
    if name in phonebook:
        del phonebook[name]
        print(f"Contact {name} deleted successfully.\n")
    else:
        print(f"Contact {name} not found.\n")
while True:
    print("1. Add contact")
    print("2. View contacts")
    print("3. Update contact")
    print("4. Delete contact")
    print("5. Exit")
    choice = input("Enter your choice (1-5): ")
    if choice == '1':
        add_contact()
    elif choice == '2':
        view_contacts()
    elif choice == '3':
        update_contact()
    elif choice == '4':
        delete_contact()
    elif choice == '5':
        print("Exiting phonebook!")
        break
    else:
        print("Invalid choice. Please try again.\n")
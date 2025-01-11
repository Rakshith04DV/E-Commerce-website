import random

# Inventory to store items
inventory = []

# Function to handle player's inventory
def show_inventory():
    print("Inventory: ")
    if not inventory:
        print("Empty")
    else:
        for item in inventory:
            print("- " + item)

# Function to handle random events
def random_event():
    event = random.choice(["You find a hidden treasure!", 
                           "A wild animal appears. You fend it off and find a health potion.", 
                           "You stumble and lose some gold coins.", 
                           "You discover a secret passage."])
    print(event)

# Introduction
print("Welcome to the Adventure Game!")
print("You find yourself in a mysterious land. Your goal is to find the lost treasure.")
print("During your journey, you may encounter various challenges and make crucial decisions.")

while True:
    print("\nOptions:")
    print("1. Explore the dark forest")
    print("2. Visit the ancient temple")
    print("3. Check your inventory")
    print("4. Quit")
    
    choice = input("Enter your choice: ")

    if choice == "1":
        print("You venture into the dark forest...")
        random_event()  # Simulate a random event
        print("While exploring, you find a hidden cave.")
        print("Options:")
        print("1. Enter the cave")
        print("2. Ignore the cave and continue exploring")
        forest_choice = input("Enter your choice: ")

        if forest_choice == "1":
            print("Inside the cave, you find a chest of gold. Congratulations! You win!")
            break
        else:
            print("You continue exploring the forest.")
    elif choice == "2":
        print("You enter the ancient temple...")
        print("In the temple, you encounter a guardian who asks you a riddle.")
        print("Riddle: What has a heart that doesn’t beat?")
        riddle_answer = input("Your answer: ").lower()

        if riddle_answer == "artichoke":
            print("Correct! The guardian lets you pass.")
            inventory.append("Ancient Key")
        else:
            print("Wrong answer! The guardian traps you inside the temple.")
            print("Game Over!")
            break
    elif choice == "3":
        show_inventory()  # Show player's inventory
    elif choice == "4":
        print("Thanks for playing! Goodbye!")
        break
    else:
        print("Invalid choice. Please try again.")

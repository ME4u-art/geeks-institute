from menu_item import MenuItem
from menu_manager import MenuManager

def show_user_menu():
    while True:
        print("\n=== Restaurant Menu Editor ===")
        print("V: View an Item")
        print("A: Add an Item")
        print("D: Delete an Item")
        print("U: Update an Item")
        print("S: Show the Menu")
        print("Q: Quit")
        
        choice = input("Choose an option: ").upper()
        
        if choice == 'V':
            view_item()
        elif choice == 'A':
            add_item_to_menu()
        elif choice == 'D':
            remove_item_from_menu()
        elif choice == 'U':
            update_item_from_menu()
        elif choice == 'S':
            show_restaurant_menu()
        elif choice == 'Q':
            print("\nExiting program...")
            show_restaurant_menu()
            break
        else:
            print("Invalid choice. Please try again.")


def view_item():
    name = input("Enter the name of the item you want to view: ")
    item = MenuManager.get_by_name(name)
    if item:
        print(f"Item: {item.name}, Price: {item.price}")
    else:
        print("Item not found.")


def add_item_to_menu():
    name = input("Enter the name of the new item: ")
    try:
        price = int(input("Enter the price of the new item: "))
    except ValueError:
        print("Invalid price. Please enter a number.")
        return
    
    item = MenuItem(name, price)
    try:
        item.save()
        print(f"'{item.name}' was added successfully with price {item.price}.")
    except Exception as e:
        print(f"Error adding item: {e}")


def remove_item_from_menu():
    name = input("Enter the name of the item to remove: ")
    item = MenuManager.get_by_name(name)
    if item:
        try:
            item.delete()
            print(f"'{name}' was deleted successfully.")
        except Exception as e:
            print(f"Error deleting item: {e}")
    else:
        print(f"Item '{name}' not found.")


def update_item_from_menu():
    old_name = input("Enter the name of the item to update: ")
    item = MenuManager.get_by_name(old_name)
    if not item:
        print(f"Item '{old_name}' not found.")
        return
    
    new_name = input(f"Enter the new name (or press Enter to keep '{item.name}'): ")
    new_price_input = input(f"Enter the new price (or press Enter to keep {item.price}): ")
    
    new_price = None
    if new_price_input:
        try:
            new_price = int(new_price_input)
        except ValueError:
            print("Invalid price input. Update canceled.")
            return
    
    try:
        item.update(new_name if new_name else None, new_price)
        print(f"Item updated successfully: Name='{item.name}', Price={item.price}")
    except Exception as e:
        print(f"Error updating item: {e}")


def show_restaurant_menu():
    items = MenuManager.all_items()
    if not items:
        print("The menu is empty.")
        return
    
    print("\n=== Restaurant Menu ===")
    for item in items:
        print(f"{item.name} - {item.price}")


# Entry point
if __name__ == "__main__":
    show_user_menu()

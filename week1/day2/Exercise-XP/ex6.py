def make_shirt(**kwargs):
    size = kwargs.get('size','L')
    message = kwargs.get('message','I Love Python')
    print(f"The size of the shirt is: {size}")
    print(f"The message printed on the shirt is: {message}")
make_shirt()
make_shirt(size = "M")
make_shirt(message ="I Love java script")


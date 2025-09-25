class Phone():
    def __init__(self,phone_number):
        self.phone_number = phone_number
        self.call_history = []
        self.messages = []
        self.inbox = []

    def call (self,other_phone):
        messages = f"{self.phone_number} called {other_phone.phone_number}"
        print(messages)
        self.call_history.append(messages)
    
    def show_call_history(self):
        if not self.call_history:
            print("No calls yet.")
        else:
            for call in self.call_history:
                print(f"{call}")
    def send_message(self, other_phone, content):
        msg_dict = {
            "to": other_phone.phone_number,
            "from": self.phone_number,
            "content": content
        }
        self.messages.append(msg_dict)
        other_phone.inbox.append(msg_dict)
        print(f"{self.phone_number} sent a message to {other_phone.phone_number}: {content}")

    def show_outgoing_messages(self):
        if not self.messages:
            print("No outgoing messages.")
        else:
            print("Outgoing Messages: ")
            for msg in self.messages:
                print(f"To:{msg['to']}, from {msg['from']}, content{msg['content']}")
    def show_incoming_messages(self):
        if not self.inbox:
            print("No incoming messages.")
        else:
            print("Incoing messages.")
            for msg in self.inbox:
                print(f"From: {msg['from']}, To: {msg['to']}, Content: {msg['content']}")
    
    def show_messages_from(self,sender_number):
        filtered_messages = [msg for msg in self.inbox if msg["from"]== sender_number]

        if not filtered_messages:
            print(f"No messages from {sender_number}.")

        else:
            print(f"Messages from {sender_number}:")
            for msg in filtered_messages:
                print(f"From: {msg['from']}, To: {msg['to']}, Content: {msg['content']}")

    

phone1 = Phone("123-456-7890")
phone2 = Phone("987-654-3210")
phone3 = Phone("555-555-5555")

phone1.call(phone2)
phone2.call(phone1)

phone1.send_message(phone2, "Hello!")
phone2.send_message(phone1, "Hi! How are you?")
phone3.send_message(phone1, "Are you free tonight?")


phone1.show_call_history()
phone2.show_call_history()


phone1.show_outgoing_messages()
phone2.show_outgoing_messages()


phone1.show_incoming_messages()
phone2.show_incoming_messages()


phone1.show_messages_from("987-654-3210")
phone1.show_messages_from("555-555-5555")

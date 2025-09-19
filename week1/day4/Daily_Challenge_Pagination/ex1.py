import math

class Pagination:
    def __init__(self, items=None, page_size=10):
        if items is None:
            items = []
        self.items = items
        self.page_size = page_size
        self.current_idx = 0
        self.total_pages = math.ceil(len(self.items) / self.page_size)

    def get_visible_items(self):
        start = self.current_idx * self.page_size
        end = start + self.page_size
        return self.items[start:end]

    def go_to_page(self, page_num):
        if not 1 <= page_num <= max(self.total_pages, 1):
            raise ValueError(f"Page number must be between 1 and {max(self.total_pages,1)}.")
        self.current_idx = page_num - 1
        return self

    def first_page(self):
        self.current_idx = 0
        return self

    def last_page(self):
        self.current_idx = self.total_pages - 1
        return self

    def next_page(self):
        if self.current_idx + 1 < self.total_pages:
            self.current_idx += 1
        else:
            print("Already on the last page.")
        return self

    def previous_page(self):
        if self.current_idx > 0:
            self.current_idx -= 1
        else:
            print("Already on the first page.")
        return self

    def __str__(self):
        visible = self.get_visible_items()
        if not visible:
            return "[No items on this page]"
        return "\n".join(str(item) for item in visible)






alphabetList = list("abcdefghijklmnopqrstuvwxyz")
p = Pagination(alphabetList, 4)

print(p.get_visible_items())
# ['a', 'b', 'c', 'd']

p.next_page()
print(p.get_visible_items())
# ['e', 'f', 'g', 'h']

p.last_page()
print(p.get_visible_items())
# ['y', 'z']

p.go_to_page(10)
print(p.current_idx + 1)
# Output: 7

p.go_to_page(0)
# Raises ValueError

class Node(object):
    def __init__(self, value):
        self.value = value
        self.next = None

class UnorderedList(object):
    def __init__(self):
        self.head = None

    def is_empty(self):
        return self.head is None

    def add(self, item):
        temp = Node(item)
        temp.next = self.head
        self.head = temp

    def size(self):
        current = self.head
        count = 0
        while current is not None:
            count = count + 1
            current = current.next
        return count

    def search(self, item):
        current = self.head
        while current is not None:
            if current.value == item:
                return True
            current = current.next
        return False

    def remove(self, item):
        current = self.head
        previous = None

        while True:
            if current.value == item:
                break
            previous, current = current, current.next

        if previous is None:
            self.head = current.next
        else:
            previous.next = current.next

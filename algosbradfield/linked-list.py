class Node(object):
    def __init__(self, value):
        self.value = value
        self.next = None


# temp = Node(93)
# print(temp.value)

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
    
    def append(self, item):
        """
        adds a new item to the end of the list
        """
        current = self.head
        node = Node(item)

        while True:
            if current.next == None:
                current.next = node
                break
            else:
                current = current.next
    
    def index(self, item):
        """
        returns the position of the item in the list
        """
        current = self.head
        index = 0

        while True:
            if current.value == item:
                return index
            else:
                current = current.next
                index += 1        
        return -1
    
    def insert(self, pos, item):
        """
        adds a new item at position
        """
        current = self.head
        previous = None
        node = Node(item)
        count = 0

        while True:
            if count == pos:
                if previous == None:
                    self.head = node
                    node.next = current
                else:
                    previous.next = node
                    node.next = current
                break
            else:
                previous, current = current, current.next
                count += 1

    
    def pop(self, pos):
        """
        removes and returns the item at position pos
        """
        pass

    def print(self):
        result = []
        current = self.head
        if current.next == None:
            result.append(str(current.value))
        
        while True:
            result.append(str(current.value))
            if current.next == None:
                break
            else:
                current = current.next
        
        return '->'.join(result)



mylist = UnorderedList()
# print(mylist.is_empty())
mylist.add(1)
print(mylist.print())
mylist.add(2)
print(mylist.print())
mylist.add(3)
print(mylist.print())
# print(mylist.size())
print("removing item with value 2!")
mylist.remove(2)
print(mylist.print())
# print(mylist.search(2))
print("adding two to the end")
mylist.append(2)
print(mylist.print())
print("searching for 2")
print(mylist.search(2))
print("index of 2")
print(mylist.index(2))
print(mylist.print())
print("DOING IT")
mylist.insert(3, 20)
print("DONE")
print(mylist.print())

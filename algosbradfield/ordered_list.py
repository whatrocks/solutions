from unordered_list import Node, UnorderedList

class OrderedList(UnorderedList):

    def search(self, item):
        current = self.head

        while current is not None:
            if current.value == item:
                return True
            if current.value > item:
                return False
            current = current.next
        
        return False

    def add(self, item):
        current = self.head
        previous = None

        while current is not None:
            if current.value > item:
                break
            previous = current
            current = current.next
        
        temp = Node(item)
        if previous == None:
            temp.next = self.head
            self.head = temp
        else:
            temp.next = current
            previous.next = temp



# ul = UnorderedList()
# ol = OrderedList()
# # ol.add(1)
# for i in range(1000):
    # ul.add(i)
    # ol.append(i)

# print("hji")
# # print(ol.print())
# import time
# start = time.time()

# # found = ul.search(250)

# end = time.time()

# print(found, end-start)

# ul
# True 0.031056880950927734
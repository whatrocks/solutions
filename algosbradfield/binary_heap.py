'''
BinaryHeap()
    - creates new, empty, binary heap
insert(k)
    - adds a new item to the heap
find_min()
    - returns the item with the minimum key value, leaving item in the heap
del_min()
    - returns the item with the miniumumkey value, removing the item from the heap
is_empty()
    - returns true if heap is empty
size()
    - returns the number of items in the heap
build_leap(list)
    - builds a new heap from a list of keys
'''

class BinaryHeap(object):
    
    # constructor function
    def __init__(self):
        self.items = [0]

    def __len__(self):
        return len(self.items) - 1

    def percolate_up(self):
        i = len(self)
        # check for a parent
        while i // 2 > 0:
            if self.items[i] < self.items[i // 2]:
                print("I'm swapping: ", self.items[i//2], self.items[i], "!")
                self.items[i//2], self.items[i] = self.items[i], self.items[i//2]
            i = i // 2
    
    def insert(self, k):
        self.items.append(k)
        self.percolate_up()

    def percolate_down(self, i):
        # check for children
        while i * 2 <= len(self):
            mc = self.min_child(i)
            if self.items[i] > self.items[mc]:
                print("I'm swapping: ", self.items[i], self.items[mc])
                self.items[i], self.items[mc] = self.items[mc], self.items[i]
            i = mc
    
    def min_child(self, i):
        if i * 2 + 1 > len(self):
            return i * 2
        
        if self.items[i * 2] < self.items[i * 2 + 1]:
            return i * 2
        
        return i * 2 + 1

    def delete_min(self):
        return_value = self.items[1]
        self.items[1] = self.items[len(self)]
        self.items.pop()
        self.percolate_down(1)
        return return_value
    
    def build_heap(self, alist):
        i = len(alist) // 2
        self.items = [0] + alist
        while i > 0:
            self.percolate_down(i)
            i = i - 1


bh = BinaryHeap()
print(bh.items)
bh.build_heap([9, 6, 5, 2, 3])
print(bh.items)
bh.insert(-20)
print(bh.items)
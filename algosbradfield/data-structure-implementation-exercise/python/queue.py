class PythonListQueue(object):
    """
    A queue based on the built in Python list type.
    """
    def __init__(self):
        self._items = []

    def enqueue(self, item):
        self._items.append(item)

    def dequeue(self):
        return self._items.pop(0)

    def size(self):
        return len(self._items)

    def is_empty(self):
        return len(self._items) == 0


class LinkedListNode(object):
    """
    A doubly linked list node, support for the LinkedListQueue. You should not need
    to change this code, but you will want to use it in the LinkedListQueue
    """
    def __init__(self, value, prevNode, nextNode):
        self.value = value
        self.prev = prevNode
        self.next = nextNode


class LinkedListQueue(object):
    """
    Finish the functions below to create a queue based on a linked list. Because
    a queue must either:

        * enqueue to the head and dequeue from the tail; or
        * enqueue to the tail and dequeue from the head.

    You should use a doubly linked list to ensure O(1) time enqueue and dequeue.
    """
    def __init__(self):
        self.head = None
        self.tail = None

    def enqueue(self, item):
        if self.head == None:
            temp = LinkedListNode(item, None, None)
            self.head = temp
            self.tail = temp
        else:
            temp = LinkedListNode(item, None, self.head)
            self.head.prev = temp
            self.head = temp

    def dequeue(self):
        tail = self.tail
        self.tail = tail.prev
        if self.tail == None:
            self.head = None
        return tail.value

    def size(self):
        size = 0
        if self.head == None:
            return 0
        current = self.head
        while True:
            if current.next == None:
                break
            else:
                current = current.next
                size += 1
        return size

    def is_empty(self):
        return self.head == None


class RingBufferQueue(object):
    """
    Finish the functions below such that this queue is backed by a Ring Buffer.
    Recall that a ring buffer uses an array and two pointers to keep track of
    where to read, and where to write.
    
    Be careful! If the read pointer were to overtake the write pointer, it
    would return incorrect data! If the write pointer were to overtake the read
    pointer, it would overwrite data that hasn't been read yet!

    In many contexts, you would avoid this issue by stalling when one pointer
    would overwrite the other. Since doing so only makes sense in a multithreaded
    environment, you may prefer to just resize the underlying ring buffer at
    these times, instead.
    """
    def __init__(self):
        self.storage = [None, None, None, None, None, None, None, None]
        self.read = 0
        self.write = 0
        self.count = 0

    def enqueue(self, item):
        self.storage[self.write] = item
        # What if they overtake
        next_write = (self.write + 1) % len(self.storage)
        self.write = next_write
        self.count += 1
        
    def dequeue(self):
        item = self.storage[self.read]
        self.read = (self.read + 1) % len(self.storage)
        self.count -= 1
        return item

    def size(self):
        return self.count

    def is_empty(self):
        return self.count == 0


QUEUE_CLASSES = (
    PythonListQueue,
    LinkedListQueue,
    RingBufferQueue
)


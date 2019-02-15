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
        self.num_items = 0

    def enqueue(self, item):
        node = LinkedListNode(item, None, None)

        # Link the old head and the new node (which becomes the head)
        if self.head is None:
            self.tail = node
        else:
            self.head.prev = node
            node.next = self.head

        self.head = node
        self.num_items += 1

    def dequeue(self):
        # Update the tail
        ret_node = self.tail
        self.tail = self.tail.prev

        # Unlink things
        ret_node.prev = None

        if self.tail == None:
            self.head = None
        else:
            self.tail.next = None

        self.num_items -= 1

        return ret_node.value

    def size(self):
        return self.num_items

    def is_empty(self):
        return self.num_items == 0


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
        self._capacity = 200
        self._items = [None] * self._capacity
        self._write_idx = 0
        self._read_idx = 0
        self._item_count = 0

    def enqueue(self, item):
        if self._item_count == self._capacity:
            # If the buffer is full, rotate items so that the next items to be
            # read are at the beginning, then double the capacity. To rotate,
            # we reverse the whole list in place, then reverse both components.
            # See Programming Pearls for an explanation.
            items = self._items
            items.reverse()
            n = self._capacity - self._read_idx
            for i in range(n):
                items[i], items[n-i-1] = items[n-i-1], items[i]
            for i in range(self._read_idx//2):
                items[n+i], items[-i-1] = items[-i-1], items[n+i]
            items.extend(None for _ in range(self._capacity))

            self._items = items
            self._write_idx = self._capacity
            self._read_idx = 0
            self._capacity *= 2

        self._items[self._write_idx] = item
        self._write_idx = (self._write_idx + 1) % self._capacity
        self._item_count += 1


    def dequeue(self):
        ret_itm = self._items[self._read_idx]
        self._read_idx = (self._read_idx + 1) % self._capacity
        self._item_count -= 1

        return ret_itm

    def size(self):
        return self._item_count

    def is_empty(self):
        return self._item_count == 0


QUEUE_CLASSES = (
    PythonListQueue,
    LinkedListQueue,
    RingBufferQueue
)


class Queue():

    def __init__(self):
        self._items = []

    def is_empty(self):
        return self._items == []

    def enqueue(self, item):
        self._items.insert(0, item)

    def dequeue(self):
        try:
            return self._items.pop()
        except IndexError:
            return 'empty!'
    
    def size(self):
        return len(self._items)


# But it's better to use 
# collections.deque for O(1) enqueues and dequees

q = Queue()
q.enqueue('foo')
q.enqueue('bar')
print(q.dequeue())
print(q.dequeue())
print(q.dequeue())
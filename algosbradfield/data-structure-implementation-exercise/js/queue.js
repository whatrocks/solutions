class ArrayQueue {
  /*
   * A queue based on the built in Array type. 
   */
  constructor() {
    this.items = [];
  }

  enqueue(item) {
    this.items.push(item);
  }

  dequeue() {
    return this.items.shift();
  }

  size() {
    return this.items.length;
  }

  is_empty() {
    return this.size() === 0;
  }
}

class LinkedListNode {
  /*
   * A doubly linked list node, support for the LinkedListQueue. You should not need
   * to change this code, but you will want to use it in the LinkedListQueue
   */
  constructor(value, prevNode, nextNode) {
    this.value = value;
    this.prev = prevNode;
    this.next = nextNode;
  }
}

class LinkedListQueue {
  /*
   * Finish the functions below to create a queue based on a linked list. Because
   * a queue must either:
   *
   * - enqueue to the head and dequeue from the tail; or
   * - enqueue to the tail and dequeue from the head.
   *
   * You should use a doubly linked list to ensure O(1) time enqueue and dequeue.
   */
  constructor() {
    // TODO
  }

  enqueue(item) {
    // TODO
  }

  dequeue() {
    // TODO
  }

  size() {
    // TODO
  }

  is_empty() {
    // TODO
  }
}


class RingBufferQueue {
  /*
   * Finish the functions below such that this queue is backed by a Ring Buffer.
   * Recall that a ring buffer uses an array and two pointers to keep track of
   * where to read, and where to write.
   *
   * Be careful! If the read pointer were to overtake the write pointer, it
   * would return incorrect data! If the write pointer were to overtake the read
   * pointer, it would overwrite data that hasn't been read yet!
   *
   * In many contexts, you would avoid this issue by stalling when one pointer
   * would overwrite the other. Since doing so only makes sense in a multithreaded
   * environment, you may prefer to just resize the underlying ring buffer at
   * these times, instead.
   */
  constructor() {
    // TODO
  }

  enqueue(item) {
    // TODO
  }

  dequeue() {
    // TODO
  }

  size() {
    // TODO
  }

  is_empty() {
    // TODO
  }
}

module.exports = {
  QUEUE_CLASSES: [ArrayQueue],

  // Add additional entries to QUEUE_CLASSES as you fill in the implementations:
  // QUEUE_CLASSES: [ArrayQueue, LinkedListQueue, RingBufferQueue],
};

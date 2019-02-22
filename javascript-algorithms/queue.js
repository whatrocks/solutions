const LinkedList = require('./LinkedList')

class Queue {
    constructor() {
        this.linkedList = new LinkedList()
    }

    isEmpty() {
        return !this.linkedList.head;
    }

    peek() {
        if (!this.linkedList.head) {
            return null
        }
        return this.linkedList.head
    }

    enqueue(value) {
        this.linkedList.addToTail(value)
    }

    dequeue() {
        const removedHead = this.linkedList.deleteHead()
        return removedHead ? removedHead.value : null;
    }

    toString(callback) {
        return this.linkedList.toString(callback)
    }
}

const q = new Queue()
console.log(q)
q.enqueue(1)
q.enqueue(2)
q.enqueue(3)
console.log(q.toString())
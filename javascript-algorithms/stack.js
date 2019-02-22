const LinkedList = require('./LinkedList')

class Stack {
    constructor() {
        this.linkedList = new LinkedList()
    }

    isEmpty() {
        return !this.linkedList.head
    }

    peek() {
        if (this.isEmpty()) {
            return null
        }
        return this.linkedList.head.value;
    }

    push(value) {
        this.linkedList.addToHead(value)
    }

    pop() {
        const removedHead = this.linkedList.deleteHead()
        return removedHead ? removedHead.value : null;
    }

    toArray() {
        return this.linkedList.toArray().map(linkedListNode => linkedListNode.value)
    }

    toString(callback) {
        return this.linkedList.toString(callback)
    }
}

const s = new Stack()
s.push(1)
s.push(2)
s.push(3)
s.push(4)
s.pop()
s.pop()
console.log(s.toString())
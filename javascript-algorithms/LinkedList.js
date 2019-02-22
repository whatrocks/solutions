class LinkedListNode {
    constructor(value, next = null) {
        this.value = value;
        this.next = next
    }
    toString(callback) {
        return callback ? callback(this.value) : `${this.value}`
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    addToHead(value) {
        const newNode = new LinkedListNode(value);
        if (!this.tail) {
            this.tail = newNode
        }
        if (this.head) {
            newNode.next = this.head
        }
        this.head = newNode
    }

    addToTail(value) {
        const newNode = new LinkedListNode(value)
        if (!this.head) {
            this.head = newNode
        }
        if (this.tail) {
            this.tail.next = newNode
        }
        this.tail = newNode
    }

    delete(value) {
        if (!this.head) {
            return null;
        }

        let deletedNode = null;

        let currentNode = this.head;
        if (currentNode !== null) {
            while (currentNode.next) {
                if (currentNode.next.value === value) {
                    console.log("found it")
                    deletedNode = currentNode.next;
                    currentNode.next = currentNode.next.next
                } else {
                    currentNode = currentNode.next
                }
            }
        }

        // check tail
        if (this.tail.value === value) {
            this.tail = currentNode
        }

        return deletedNode;
    }


    find({ value = undefined, callback = undefined }) {
        if (!this.head) {
            return null;
        }

        let currentNode = this.head;

        while (currentNode) {
            // if callback is used, try that
            if (callback && callback(currentNode.value)) {
                return currentNode
            }
            // if vlaue, use value
            if (value !== undefined && currentNode.value === value) {
                return currentNode
            }

            currentNode = currentNode.next
        }
        return null
    }

    deleteTail() {
        const deletedTail = this.tail;

        if (this.head === this.tail) {
            // there is only one node in the list
            this.head = null;
            this.tail = null;
            return deletedTail;
        }

        // if there are many nodes

        let currentNode = this.head;
        while (currentNode.next) {
            if (!currentNode.next.next) {
                currentNode.next = null;
            } else {
                currentNode = currentNode.next
            }
        }

        this.tail = currentNode

        return deletedTail;
    }

    deleteHead() {
        if (!this.head) {
            return null;
        }

        const deletedHead = this.head;

        if (this.head.next) {
            this.head = this.head.next
        } else {
            this.head = null;
            this.tail = null;
        }

        return deletedHead
    }

    fromArray(values) {
        values.forEach(value => this.addToTail(value))
    }

    toArray() {
        const nodes = []
        let currentNode = this.head;

        while (currentNode) {
            nodes.push(currentNode.value)
            currentNode = currentNode.next
        }
        return nodes;
    }

    toString(callback) {
        return this.toArray().map(node => node.toString(callback)).toString();
    }

    reverse() {

        let currentNode = this.head;
        let prevNode = null;
        let nextNode = null;

        while (currentNode) {
            // Store next node
            nextNode = currentNode.next
            
            // change next node of the current node so it would link to previous node
            currentNode.next = prevNode

            // move prevNode and and currNode one step forward
            prevNode = currentNode
            currentNode = nextNode
        }

        // reset head and tail
        this.tail = this.head
        this.head = prevNode

    }


}

// let ll = new LinkedList()
// ll.addToHead(5)
// ll.addToHead(2)
// ll.addToHead(100)
// ll.addToHead(10)
// // console.log(ll.head)
// console.log(ll.delete(5))
// console.log(ll.tail)
// ll.deleteTail()
// ll.deleteHead()
// console.log(ll)
// ll.fromArray([2,3, 4, 5, 6])
// console.log(ll.toString())
// ll.reverse()
// console.log(ll.toString())
// console.log(ll.find({value: 2}))

module.exports = LinkedList
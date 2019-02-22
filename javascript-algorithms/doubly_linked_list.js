class DoublyLinkedListNode {
    constructor(value, next = null, previous = null) {
        this.value = value;
        this.next= next;
        this.previous = previous
    }

    toString(callback) {
        return callback ? callback(this.value) : `${this.value}`
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }   

    addToHead(value) {
        const newNode = new DoublyLinkedListNode(value, this.head);
        if (this.head) {
            this.head.previous = newNode
        }
        this.head = newNode
        

        if (!this.tail) {
            this.tail = newNode
        }
    }

    addToTail(value) {
        const newNode = new DoublyLinkedListNode(value);

        // if not head, lets make it a head
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
            return
        }

        // attach new node to end of the linked list
        this.tail.next = newNode

        // attach current tail to this nodes' prevoous
        newNode.previous = this.tail
        

        //set new node to tail
        this.tail = newNode
    }

    delete(value) {
        if (!this.head) {
            return null
        }

        let deletedNode = null;
        let currentNode = this.head;
        

        while (currentNode) {

            if (currentNode.value === value) {

                deletedNode = currentNode;

                if (deletedNode === this.head) {

                    // set head to second node
                    this.head = deletedNode.next;

                    // set new heads previous to null
                    if (this.head) {
                        this.head.previous = null;
                    }

                    if (deletedNode === this.tail) {
                        this.tail = null;
                    }

                } else if (deletedNode === this.tail) {
                    // set tail to second to last node
                    this.tail = deletedNode.previous
                    this.tail.next = null;   
                } else {
                    // if a middle node will be deleted
                    const previousNode = deletedNode.previous;
                    const nextNode = deletedNode.next;

                    previousNode.next = nextNode
                    nextNode.previous = previousNode
                }
            }

            currentNode = currentNode.next

        }

        return deletedNode
    }

    find({value, callback}) {
        if (!this.head) {
            return null;
        }

        let currentNode = this.head;

        while (currentNode) {
            // use callback
            if (callback && callback(currentNode.value)) {
                return currentNode;
            }

            // use value
            if (value !== undefined && currentNode.value === value) {
                return currentNode;
            }

            currentNode = currentNode.next
        }

        return null
    }

    deleteTail() {
        if (!this.tail) {
            // no tail
            return null;
        }

        if (this.head === this.tail) {
            // theres only one node in the list
            const deletedTail = this.tail
            this.head = null
            this.tail = null
            return deletedTail
        }

        // if many nodes in the list
        const deletedTail = this.tail;
        this.tail = this.tail.previous;
        this.tail.next = null;
        return deletedTail;
    }

    deleteHead() {
        if (!this.head) {
            return null;
        }

        const deletedHead = this.head;

        if (this.head.next) {
            this.head = this.head.next;
            this.head.previous = null;
        } else {
            this.head = null
            this.tail = null
        }

        return deletedHead;
    }

    toArray() {
        const nodes = []
        let currentNode = this.head;
        while (currentNode) {
            nodes.push(currentNode);
            currentNode = currentNode.next;
        }
        return nodes;
    }

    fromArray(values) {
        values.forEach(value => this.addToTail(value))
    }

    toString(callback) {
        return this.toArray().map(node => node.toString(callback)).toString();
    }

    reverse() {
        let currNode = this.head;
        let prevNode = null;
        let nextNode = null;

        while (currNode) {

            // save the reference to next
            nextNode = currNode.next;
            // prevNode = currNode.previous;

            // set current's next to previous
            currNode.next = prevNode;
            currNode.previous = nextNode;
            
            // set previous to current to move it one step forward
            prevNode = currNode;
            // set current to next to move it one step forward
            currNode = nextNode;
        }

        this.tail = this.head
        this.head = prevNode
    }
}


console.log("Starting!")
const dll = new DoublyLinkedList()
dll.addToHead(1)
dll.addToHead(2)
dll.addToHead(4)
dll.addToHead(4)
dll.addToHead(5)
console.log(dll.toString())
dll.delete(4)
console.log(dll.toString())
// console.log(dll.find({value: 5}))
console.log("-------------")
dll.reverse()
console.log(dll.toString())

console.log("done!");
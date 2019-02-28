var Node = function(key, val) {
    this.key = key;
    this.val = val;
    this.prev = null;
    this.next = null;
}

var DoublyLinkedList = function() {
    this.head = null;
    this.tail = null;
    this.length = 0;
}

DoublyLinkedList.prototype.addToHead = function(node) {
    if (!this.head) {
        this.head = node
        if (!this.tail) {
            this.tail = node
        }
    } else {
        this.head.prev = node
        node.next = this.head
        this.head = node
        
    }
    this.head.prev = null;
    this.length += 1
}

DoublyLinkedList.prototype.removeNode = function(node) {
    // Remove the head
    if (!node.prev) {
        this.head = node.next
        if (this.head) {
            this.head.prev = null;
        }
        
    }
    // remove the tail
    else if (!node.next) {
        this.tail = node.prev
        if (this.tail) {
            this.tail.next = null
        }
        
    } else {
            // remove middle
        if (node.prev) {
            node.prev.next = node.next        
        }
        if (node.next) {
            node.next.prev = node.prev        
        }        
    }
    this.length -= 1
}

DoublyLinkedList.prototype.removeTail = function() {
    const tail = this.tail
    if (this.tail.prev) {
        this.tail.prev.next = null
    }
    this.tail = this.tail.prev
    this.length -= 1
    return tail
}

DoublyLinkedList.prototype.print = function() {
    var nodes = []
    var current = this.head
    while (current) {
        const pair = `[${current.key}, ${current.val}]`
        nodes.push(pair)
        current = current.next
    }
    console.log(nodes.join('<-->'))
}

/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.storage = {}
    this.list = new DoublyLinkedList()
    this.capacity = capacity;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    const node = this.storage[key]
    if (!node) {
        return -1
    }
    this.list.removeNode(node)
    this.list.addToHead(node)
    return node.val    
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    const node = new Node(key, value)
    if (this.list.length < this.capacity) {
        const existingNode = this.storage[key]
        if (existingNode) {
            this.list.removeNode(existingNode)
            this.storage[key] = node
            this.list.addToHead(node);
        }else {
            this.list.addToHead(node)
        }
        
    } else {

        // check if exists
        const existingNode = this.storage[key]
        if (existingNode) {
            this.list.removeNode(existingNode)
            this.storage[key] = node
            this.list.addToHead(node)
        } else {
            // remove tail
            const oldTail = this.list.removeTail()
            // console.log("oldTail: ", oldTail)
            delete this.storage[oldTail.key]
            this.list.addToHead(node)
        }
    }
    this.storage[key] = node;
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = Object.create(LRUCache).createNew(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

// const cache = new LRUCache( 2 /* capacity */ );

// cache.put(2, 1);
// cache.put(1, 1);
// // console.log(cache)
// cache.put(2, 3);
// // console.log(cache)
// cache.put(4, 1);
// console.log(cache)
// cache.get(1);
// console.log(cache)
// cache.get(2);

const cache = new LRUCache( 10 /* capacity */ );


// console.log("============================")
// console.log(cache.put(10,13));

// console.log(cache.put(3,17));

// console.log(cache.put(6,11));

// console.log(cache.put(10,5));

// console.log(cache.put(9,10));

// console.log(cache.get(13));

// console.log(cache.put(2,19));

// console.log(cache.get(2));

// console.log(cache.get(3));

// console.log(cache.put(5,25));

// console.log(cache.get(8));

// console.log(cache.put(9,22));

// console.log(cache.put(5,5));

// console.log(cache.put(1,30));

// console.log(cache.get(11));

// console.log(cache.put(9,12));

// console.log(cache.get(7));

// console.log(cache.get(5));

// console.log(cache.get(8));

// console.log(cache.get(9));

// console.log(cache.put(4,30));

// console.log(cache.put(9,3));

// console.log(cache.get(9));

// console.log(cache.get(10));

// console.log(cache.get(10));

// console.log(cache.put(6,14));

// console.log(cache.put(3,1));

// console.log(cache.get(3));

// console.log(cache.put(10,11));

// console.log(cache.get(8));

// console.log(cache.put(2,14));

// console.log(cache.get(1));

// console.log(cache.get(5));

// console.log(cache.get(4));

// console.log(cache.put(11,4));

// console.log(cache.put(12,24));

// console.log(cache.put(5,18));

// console.log(cache.get(13));

// console.log(cache.put(7,23));

// console.log(cache.get(8));

// console.log(cache.get(12));

// console.log(cache.put(3,27));

// console.log(cache.put(2,12));

// console.log(cache.get(5)); // gives you 18

// console.log(cache.put(2,9));

// console.log(cache.put(13,4));

// console.log(cache.put(8,18));

// console.log(cache.put(1,7));

// console.log(cache.get(6));

// console.log(cache.put(9,29));

// console.log(cache.put(8,21));

// console.log(cache.get(5));

// console.log(cache.put(6,30));

// console.log(cache.put(1,12));

// console.log(cache.get(10));

// console.log(cache.put(4,15));

// console.log(cache.put(7,22));

// console.log(cache.put(11,26));

// console.log(cache.put(8,17));

// console.log(cache.put(9,29));

// console.log(cache.get(5));

// console.log(cache.put(3,4));

// console.log(cache.put(11,30));

// console.log(cache.get(12));

// console.log(cache.put(4,29));

// console.log(cache.get(3));

// console.log(cache.get(9));

// console.log(cache.get(6));

// console.log(cache.put(3,4));

// console.log(cache.get(1));

// console.log(cache.get(10));

// console.log(cache.put(3,29));

// console.log(cache.put(10,28));

// console.log(cache.put(1,20));

// console.log(cache.put(11,13));

// console.log(cache.get(3));

// console.log(cache.put(3,12));

// console.log(cache.put(3,8));

// console.log(cache.put(10,9));

// console.log(cache.put(3,26));

// console.log(cache.get(8));

// console.log(cache.get(7));

// console.log(cache.get(5));

// console.log(cache.put(13,17));

// console.log(cache.put(2,27));

// console.log(cache.put(11,15));

// console.log(cache.get(12));

// console.log(cache.put(9,19));

// console.log(cache.put(2,15));

// console.log(cache.put(3,16));

// console.log(cache.get(1));

// console.log(cache.put(12,17));

// console.log(cache.put(9,1));

// console.log(cache.put(6,19));

// console.log(cache.get(4));

// console.log(cache.get(5));

// console.log(cache.get(5));

// console.log(cache.put(8,1));

// console.log(cache.put(11,7));

// console.log(cache.put(5,2));

// console.log(cache.put(9,28));

// console.log(cache.get(1));

// console.log(cache.put(2,2));

// console.log(cache.get(7,4));

// console.log(cache.put(4,22));

// console.log(cache.put(7,24));

// console.log(cache.put(9,26));

// console.log(cache.put(13,28));

// console.log(cache.put(11,26));


// console.log(cache.get(2);

// console.log(cache.put(10, 13));

// console.log(cache.put(3, 17));
// console.log(cache.put(6, 11));
// console.log(cache.put(10, 5));
// console.log(cache.put(9, 10));
// console.log(console.log(cache.get(13));
// console.log(cache.put(2, 19));
// console.log(console.log(cache.get(2));
// console.log(console.log(cache.get(3));
// console.log(cache.put(5,25);
// console.log(console.log(cache.get(8));
// console.log(cache.put(9,22);
// console.log(cache.put(5,5);
// console.log(cache.put(1,30);
// console.log(cache.get(11);
// console.log(cache.put(9,12);
// cache.get(7)
// cache.get(5)
// cache.get(8)
// cache.get(9)
// cache.put(4,30)
// cache.put(9,3)
// cache.get(9)
// cache.get(10)
// cache.get(10)
// cache.put(6, 14)
// cache.put(3,1)
// cache.get(3)
// cache.put(10,11)
// cache.get(8)
// cache.put(2,14)
// cache.get(1)
// cache.get(5)
// cache.get(4)
// cache.put(11,4)
// cache.put(12,24)
// cache.put(5, 18)
// cache.get(13)
// cache.put(7,23)
// console.log(cache.get(8))
// console.log(cache.get(12))
// console.log(cache.put(3,27))
// console.log(cache.put(2,12))
// console.log(cache.get(5))
// console.log(cache.put(2,9))
// console.log(cache.get(5))
// console.log(cache.list.head)
// cache.get(10)
// cache.get(10)

cache.list.print()
console.log("Done!")

// cache.put(1, 1);
// // console.log(cache)
// cache.put(2, 3);
// // console.log(cache)
// cache.put(4, 1);
// console.log(cache)
// cache.get(1);
// console.log(cache)
// cache.get(2);

// [null,null,null,null,null,null,-1,null,19,17,null,-1,null,null,null,-1,null,-1,5,-1,12,null,null,3,5,5,null,null,1,null,-1,null,30,5,30,null,null,null,-1,null,-1,24,null,null,18,null,null,null,null,14,null,null,18,null,null,11,null,null,null,null,null,18,null,null,-1,null,4,29,30,null,12,11,null,null,null,null,29,null,null,null,null,17,22,18,null,null,null,-1,null,null,null,20,null,null,null,-1,18,18,null,null,null,null,20,null,null,null,null,null,null,null]
// [null,null,null,null,null,null,-1,null,19,17,null,-1,null,null,null,-1,null,-1,5,-1,12,null,null,3,5,5,null,null,1,null,-1,null,30,5,30,null,null,null,-1,null,-1,24,null,null,18,null,null,null,null,-1,null,null,18,null,null,-1,null,null,null,null,null,18,null,null,-1,null,4,29,30,null,12,-1,null,null,null,null,29,null,null,null,null,17,22,18,null,null,null,-1,null,null,null,20,null,null,null,-1,18,18,null,null,null,null,20,null,null,null,null,null,null,null]
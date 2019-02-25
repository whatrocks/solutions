const MinHeap = require('./MinHeap')

// same as min heap but when we compare
// we look at its priority, not its value

class PriorityQueue extends MinHeap {
    constructor() {
        super();
        this.priorities = {};
        this.compare = this.comparePriority.bind(this)
        this.compareValue = this.compareValue.bind(this)
    }

    add(item, priority = 0) {
        this.priorities[item] = priority;
        super.add(item)
        return this;
    }

    remove(item, customFindingComparator) {
        super.remove(item, customFindingComparator);
        delete this.priorities[item]
        return this;
    }

    changePriority(item, priority) {
        this.remove(item, this.compareValue)
        this.add(item, priority);
        return this;
    }

    findByValue(item) {
        const found = this.find(item, this.compareValue);
        console.log("found: ", found)
        return found;
    }

    hasValue(item) {
        return this.findByValue(item).length > 0;
    }

    comparePriority(a, b) {
        if (this.priorities[a] === this.priorities[b]) {
            return 0
        }
        // console.log("a: ", this.priorities[a], "b: ", this.priorities[b])
        return this.priorities[a] < this.priorities[b] ? -1 : 1
    }

    compareValue(a, b) {
        if (a === b) {
            return 0;
        }
        return a < b ? -1 :1;
    }
}

module.exports = PriorityQueue

// const pq = new PriorityQueue();
// pq.add("first", 1)
// console.log(pq.heapContainer)
// console.log("=====================")
// pq.add("second",2)
// console.log(pq.heapContainer)
// console.log("=====================")
// pq.add("three",30)
// console.log(pq.heapContainer)
// console.log("=====================")
// pq.add("urgent",10)
// // pq.remove("first message")
// console.log(pq.heapContainer)
// console.log("=====================")
// console.log(pq.poll())
// console.log(pq.heapContainer)
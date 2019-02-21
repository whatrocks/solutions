var MinHeap = function() {
    this.items = [0];
}

MinHeap.prototype.percolate_up = function() {
    let i = this.size();
    while (Math.floor(i / 2) > 0) {
        let parentIdx = Math.floor(i / 2);
        if (this.items[i] < this.items[parentIdx]) {
            console.log("percolating up!!: ", this.items[i], this.items[parentIdx])
            // swap them
            let temp = this.items[i];
            this.items[i] = this.items[parentIdx]
            this.items[parentIdx] = temp
        }
        i = Math.floor(i / 2)
    }
}

MinHeap.prototype.percolate_down = function(i) {
    
    while (i * 2 <= this.size()) {
        min_child = this.min_child(i)
        if (this.items[i] > this.items[min_child]) {
            //swap them
            console.log("percolating down!!: ", this.items[i], this.items[min_child])
            let temp = this.items[i]
            this.items[i] = this.items[min_child]
            this.items[min_child] = temp
        }
        i = min_child
    }

}

MinHeap.prototype.min_child = function(i) {
    // If there's no right child
    if (i * 2 + 1 > this.size()) {
        return i * 2
    }

    // if left child is smaller, return it
    if (this.items[i * 2] < this.items[i * 2 + 1]) {
        return i * 2
    }

    // return right otherwise
    return i * 2 + 1
}

MinHeap.prototype.insert = function(item) {
    this.items.push(item)
    this.percolate_up();
}

MinHeap.prototype.find_min = function() {
    return this.items[1]
}

MinHeap.prototype.del_min = function() {
    let return_val = this.items[1]
    this.items[1] = this.items[this.size()]
    this.items.pop()
    this.percolate_down(1)
    return return_val
}

MinHeap.prototype.is_empty = function() {
    return this.size() === 0
}

MinHeap.prototype.size = function() {
    return this.items.length -1
}

MinHeap.prototype.build_heap = function(alist) {
    let index = Math.floor(alist.length / 2)
    this.items = [0].concat(alist)
    while (index > 0) {
        this.percolate_down(index)
        index -= 1
    }
}

// BSTs are logarithmic as long as they are balanced
// our min heap will be a COMPLETE BINARY TREE
// HEAP ORDER PROPERTY

const pq = new MinHeap();
pq.insert(5);
pq.insert(9);
pq.insert(11);
pq.insert(14);
pq.insert(18);
pq.insert(19);
pq.insert(21);
pq.insert(33);
pq.insert(17);
pq.insert(27);
console.log(pq)
pq.insert(7);
console.log(pq)
console.log(pq.del_min())
console.log(pq)
console.log("done!")

console.log("new one")
const my_pq = new MinHeap();
my_pq.build_heap([9, 6, 5, 2, 3])
console.log(my_pq)
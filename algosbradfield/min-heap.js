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

// const pq = new MinHeap();
// pq.insert(5);
// pq.insert(9);
// pq.insert(11);
// pq.insert(14);
// pq.insert(18);
// pq.insert(19);
// pq.insert(21);
// pq.insert(33);
// pq.insert(17);
// pq.insert(27);
// console.log(pq)
// pq.insert(7);
// console.log(pq)
// console.log(pq.del_min())
// console.log(pq)
// console.log("done!")

// console.log("new one")
// const my_pq = new MinHeap();
// my_pq.build_heap([9, 6, 5, 2, 3])
// console.log(my_pq)


// Let's use our min heap for dijkstra's algo

function calculateDistances(graph, starting_vertex) {
    let distances = {}
    for (let vertex of Object.keys(graph)) {
        distances[vertex] = Infinity
    }
    distances[starting_vertex] = 0

    // let entry_lookup = {}
    let pq = new MinHeap()

    for (let [vertex, distance] of Object.entries(distances)) {
        const entry = [distance, vertex]
        // entry_lookup[vertex] = entry
        pq.insert(entry)
    }

    while (pq.size() > 0) {
        let [current_distance, current_vertex] = pq.del_min()
        // console.log("hi:", current_distance, current_vertex);
        for (let [neighbor, neighbor_distance] of Object.entries(graph[current_vertex])) {
            let distance = distances[current_vertex] + neighbor_distance
            if (distance < distances[neighbor]) {
                distances[neighbor] = distance
                // entry_lookup[neighbor][0] = distance
            }
        }
    }

    // console.log("entry lookup: ", entry_lookup)


    // console.log(entry_lookup)
    // console.log(pq.items)

    return distances;
}

const example_graph = {
    'U': {'V': 2, 'W': 5, 'X': 1},
    'V': {'U': 2, 'X': 2, 'W': 3},
    'W': {'V': 3, 'U': 5, 'X': 3, 'Y': 1, 'Z': 5},
    'X': {'U': 1, 'V': 2, 'W': 3, 'Y': 1},
    'Y': {'X': 1, 'W': 1, 'Z': 1},
    'Z': {'W': 5, 'Y': 1},
}

console.log(calculateDistances(example_graph, 'X'))


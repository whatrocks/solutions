var Queue = function() {
    this.items = []
}

Queue.prototype.is_empty = function() {
    return this.items.length === 0
}

Queue.prototype.enqueue = function(item) {
    this.items.unshift(item)
}

Queue.prototype.dequeue = function() {
    return this.items.pop()
}

Queue.prototype.size = function() {
    return this.items.length
}

var q = new Queue()
q.enqueue('foo')
q.enqueue('bar')
console.log(q.size())
console.log(q.dequeue())
console.log(q.dequeue())
console.log(q.dequeue())
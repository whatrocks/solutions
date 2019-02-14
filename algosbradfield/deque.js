var Deque = function() {
    this.items = []
}

Deque.prototype.is_empty = function() {
    return !this.items.length
}

Deque.prototype.add_front = function(item) {
    this.items.push(item)
}

Deque.prototype.add_rear = function(item) {
    this.items.unshift(item)
}

Deque.prototype.remove_front = function() {
    return this.items.pop()
}

Deque.prototype.remove_rear = function() {
    return this.items.shift()
}

Deque.prototype.size = function() {
    return this.items.length;
}

d = new Deque()
console.log(d.is_empty())
d.add_rear(4)
d.add_rear('dog')
d.add_front('cat')
d.add_front(true)
console.log(d.is_empty())
d.add_rear(8.4)
console.log(d.remove_rear())
console.log(d.remove_front())
console.log(d.size())

console.log(d)
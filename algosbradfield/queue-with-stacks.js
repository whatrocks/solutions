var QueueWithStacks = function() {
    this._aStack = []
    this._bStack = []
}

QueueWithStacks.prototype.enqueue = function(item) {
    this._aStack.push(item)
}

QueueWithStacks.prototype.is_empty = function() {
    return !this._aStack.length && !this._bStack.length;
}

QueueWithStacks.prototype.size = function() {
    return this._aStack.length + this._bStack.length;
}

QueueWithStacks.prototype.dequeue = function() {
    if (this._bStack.length) {
        return this._bStack.pop()
    }
    if (!this._aStack.length) {
        return null
    }
    while (this._aStack.length > 1) {
        this._bStack.push(this._aStack.pop())
    }
    return this._aStack.pop()
}

var q = new QueueWithStacks()
q.enqueue(1)
q.enqueue(2)
q.enqueue(3)
console.log(q.dequeue())
// console.log(q.dequeue())
// console.log(q.dequeue())
q.enqueue(4)
console.log("size: ",q.size())
console.log(q.dequeue())
console.log("is empty: ",q.is_empty())
console.log(q.dequeue())
console.log(q.dequeue())
console.log("is empty: ",q.is_empty())
console.log(q)
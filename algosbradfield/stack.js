var Stack = function() {
    this.items = [];   
}

Stack.prototype.is_empty = function() {
    return !this.items.length;
}

Stack.prototype.push = function(item) {
    this.items.push(item)
}

Stack.prototype.pop = function() {
    return this.items.pop();
}

Stack.prototype.peek = function() {
    return this.items[this.items.length - 1];
}

Stack.prototype.size = function() {
    return this.items.length
}

my_stack = new Stack();
my_stack.push("Charlie")
console.log(my_stack.size())
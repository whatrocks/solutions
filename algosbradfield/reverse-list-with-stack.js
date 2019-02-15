// Time: O(n)
// Space: O(n)
function reverseList(list) {
    var stack = []
    var result = []
    for (var item of list) {
        stack.push(item)
    }
    while (stack.length) {
        result.push(stack.pop())
    }
    return result
}

console.log(reverseList([1,2,3]))
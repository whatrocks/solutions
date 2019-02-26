/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const results = []
    if (n <= 0) {
        return results
    }
    if (n === 1) {
        return ["()"]
    }

    var traverse = function(current, left, right) {
        if (left < n) {
            traverse(current + "(", left + 1, right)
        }
        if (right < n && current.length && right < left) {
            traverse(current + ")", left, right + 1)
        }
        if (right === n && left === n) {
            results.push(current)
        }
    }

    traverse("", 0, 0)
    return results;
};

console.log(generateParenthesis(3))
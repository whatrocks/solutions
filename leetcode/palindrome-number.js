/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    // if (x < 0) return false;
    // var nums = x.toString().split('')
    // if (nums.length === 1) return true
    // while (nums.length > 1) {
    //     var first = nums.shift()
    //     var last = nums.pop()
    //     if (first !== last) {
    //         return false
    //     }
    // }
    // return true


    // Space: O(1)
    // Time: O(n)
    if (x < 0 || (x % 10 === 0 && x !== 0)) {
        return false
    }
    
    var revertedNumber = 0;
    while (x > revertedNumber) {
        revertedNumber = revertedNumber * 10 + x % 10
        x = Math.floor(x / 10);
    }
    return x === revertedNumber || x === Math.floor(revertedNumber / 10)
};
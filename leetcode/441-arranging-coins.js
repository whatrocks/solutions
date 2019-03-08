/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    let numStairs = 0
    let current = 1
    while (n > 0) {
        n -= current
        current++
        if (n >= 0) {
            numStairs++    
        }
        
    }
    return numStairs
};
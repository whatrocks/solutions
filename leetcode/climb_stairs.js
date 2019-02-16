var climbStairs = function(n) {
    if (n <= 2) {
        return n
    } else {
        let a = 1
        let b = 2
        let c;
        for (var i = 3; i < n + 1; i++) {
            c = a + b
            a = b
            b = c
        }
        return b
    }
} 

console.log(climbStairs(5))
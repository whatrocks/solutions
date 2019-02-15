const cache = {}
var fibo = function(n) {
    // if n is 0, return 0
    // if n is 1, return 1 
    // else fibo(n-1) + fibo(n-2)
    if (n === 0 || n === 1) {
        return n
    }
    if (cache[n.toString()]) {
        // console.log("found it")
        return cache[n.toString()]
    }
    const result = fibo(n-1) + fibo(n-2)
    cache[n.toString()] = result
    // console.log(cache)
    return result
}

// console.log(fibo(0))
// console.log(fibo(1))
// console.log(fibo(2))
// console.log(fibo(3))
// console.log(fibo(4))
// console.log(fibo(5))
// console.log(fibo(6))
// console.log(fibo(7))
// console.log(fibo(100))

var fiboDP = function(n) {
    let a = 0
    let b = 1
    if (n < 0) {
        return null
    } else if (n === 0) {
        return a
    } else if (n === 1) {
        return b
    } else {
        let c = 0
        for (let i = 2; i < n + 1; i++) {
            c = a + b
            a = b
            b = c
        }
        return b
    }
}

console.log(fiboDP(1000))
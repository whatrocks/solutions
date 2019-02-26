// recursive fibo
const fib = (n) => {
    if (n <= 1) {
        return 1
    }
    return fib(n - 1) + fib(n - 2)
}

console.log(fib(3))

const dynamicFib = (n) => {
    let a = 0
    let b = 1
    for (let i = 0; i < n; i++) {
        let temp = a
        a = a + b
        b = temp
    }
    return a
}

console.log(dynamicFib(30))

// recursive
const numPaths = (height, width) => {
    if (height === 0 || width === 0) {
        return 1
    }
    return numPaths(height, width -1) + numPaths(height - 1, width)
}

console.log(numPaths(2, 2))

const numPathsDp = (height, width) => {
    const memo = Array.from(Array(height + 1)).map(() => {
        return Array.from(Array(width + 1)).map(() => 1)
    })
    // console.log(memo)
    for (let i = 1; i < memo.length; i++) {
        const row = memo[i];
        for (let j = 1; j < row.length; j++) {
            memo[i][j] = memo[i - 1][j] + memo[i][j - 1]
        }
    }
    console.log(memo)
    return memo[height][width]
}

console.log(numPathsDp(10,10))
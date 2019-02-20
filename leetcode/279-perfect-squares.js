var assert = require('assert')
var numSquares = function(n) {
    var squares = []
    for (let i = 1; i <= n; i++) {
        const sq = i * i;
        if (sq === n) {
            return 1
        } else if (sq < n) {
            squares.push(sq)
        } else {
            break;
        }
    }

    queue = squares.reverse()
    depth = 1

    while (true) {
        let next_level = []
        for (node of queue) {
            for (square of squares) {
                if (node + square === n) {
                    return depth + 1
                } else if (node + square < n) {
                    next_level.push(node+square)
                }
            }
        }
        queue = next_level
        depth += 1
    }
    // return level

    // while (true) {
    //     let nextLevel = []
    //     for (let num of currentLevel) {
    //         for (let )
    //     }
    // }

    // BFS attempty not working
    // var queue = squares.reverse()
    // var path = []
    // var min_path;
    // var sum = 0
    // while (queue.length) {
    //     console.log("q: ", queue)
    //     const current = queue.shift()
    //     const next_sum = sum + current
    //     if (next_sum === n) {
    //         path.push(current)
    //         if (!min_path || path.length < min_path) {
    //             min_path = path.length
    //         }
    //     } else if (next_sum > n) {
    //         let last = path.pop()
    //         sum -= last
    //     } else {
    //         path.push(current)
    //         sum = next_sum
    //         for (var square of squares) {
    //             if (square + next_sum <= n) {
    //                 queue.push(square)
    //             }
    //         }
    //         queue = [...new Set(queue)]
    //     }
    // }

    // console.log("path: ", path)
    // return min_path
    // DIDNT FIND SHORTEST PATH
    // let shortest;
    // function traverse(sqz, path, sum) {
    //     if (!sqz.length) {
    //         return
    //     }
    //     const last = sqz[sqz.length - 1]
    //     const new_sum = sum + last
    //     if (new_sum === n) {
    //         path.push(last)
    //         const length_of_path = path.length
    //         if (!shortest || length_of_path < shortest) {
    //             shortest = length_of_path
    //         }
    //         return 
    //     } else if (new_sum > n) {
    //         sqz.pop()
    //         traverse(sqz, path, sum)
    //     } else {
    //         path.push(last)
    //         traverse(sqz, path, new_sum)
    //     }
    // }

    // while (squares.length) {
    //     traverse(squares.slice(), [], 0)
    //     squares.pop()
    // }

    // return shortest
}

console.log("starting tests")
assert.equal(numSquares(43), 3)
assert.equal(numSquares(15), 4)
assert.equal(numSquares(12), 3)
console.log("done")
var assert = require('assert')
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {

    // DFS approach
    // 1. iterate through each element in the grid
    // 2. at each element, if the grid is "1"
        // increase our island counter
        // perform dfs search to mark the entire island as "0" to show visited
    
    num_islands = 0

    function dfs(row, col) {
        const val = grid[row][col]
        if (val === "0") {
            return
        } else {
            grid[row][col] = "0"
            // up
            if (row - 1 >= 0) {
                dfs(row-1, col)
            }
            // down
            if (row + 1 < grid.length) {
                dfs(row + 1, col)
            }
            // left
            if (col - 1 >= 0) {
                dfs(row, col-1)
            }
            // right
            if (col + 1 < grid[row].length) {
                dfs(row,col+1)
            }
        }
    }

    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[row].length; col++) {
            let val = grid[row][col]
            if (val === "1") {
                num_islands++
                // dfs to visit the entire island and mark as visited
                dfs(row, col)
            }
        }
    }

    return num_islands
    
    
    // Failed solution that tried to do it iteratively from top left to bottom
    // let islands = [];
    // for (let row = 0; row < grid.length; row++) {
    //     for (let col = 0; col < grid[row].length; col++) {
    //         // get the value
    //         const val = grid[row][col];
    //         // If this is a 1
    //         if (parseInt(val, 10)) {
    //             // check left
    //             const leftColIndex = col - 1;
    //             let leftVal = 0;
    //             if (leftColIndex > -1) {
    //                 leftVal = parseInt(grid[row][leftColIndex])
    //             }
    //             // console.log("left: ", leftVal)
    //             // check top
    //             let topVal = 0;
    //             const topRowIndex = row - 1;
    //             if (topRowIndex > -1) {
    //                 topVal = parseInt(grid[topRowIndex][col],)
    //             }
                
    //             if (leftVal) {
    //                 // check to make sure its not top of the stack
    //                 const lastIsland = islands[islands.length - 1]
    //                 if (lastIsland[0] === row && lastIsland[1] === leftColIndex) {
    //                     islands.pop()
    //                 }
    //             }

    //             if (topVal) {
    //                 // check to make sure its not top of the stack
    //                 const lastIsland = islands[islands.length - 1]
    //                 if (lastIsland[0] === topRowIndex && lastIsland[1] === col) {
    //                     islands.pop()
    //                 }
    //             }

    //             if (!leftVal && !topVal) {
    //                 console.log("new island: ", row, col)
    //                 islands.push([row, col])
    //             }
    //         }
    //     }
    // }

    // return islands.length

};



console.log("Start")
// [["1","0","1","1","1"],["1","0","1","0","1"],["1","1","1","0","1"]]
assert.equal(numIslands([
    ["1","0","1","1","1"],
    ["1","0","1","0","1"],
    ["1","1","1","0","1"]
]), 1)

assert.equal(numIslands([
    ["1","1","1"],
    ["0","1","0"],
    ["1","1","1"],
]), 1)
assert.equal(numIslands([
    ["1","1","0","0","0"],
    ["1","1","0","0","0"],
    ["0","0","1","0","0"],
    ["0","0","0","1","1"]
]), 3)
// assert.equal(numIslands([
//     [1,1,1,1,0],
//     [1,1,0,1,0],
//     [1,1,0,0,0],
//     [0,0,0,0,0],
// ]), 1)
// assert.equal(numIslands([
//     [1,1,0,0,0],
//     [1,1,0,0,0],
//     [0,0,1,0,0],
//     [0,0,0,1,1],
// ]), 3)
console.log("Done!")
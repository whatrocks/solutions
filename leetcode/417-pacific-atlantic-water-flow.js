var assert = require("assert");
var pacificAtlantic = function(matrix) {
    if (!matrix.length) {
        return []
    }
    let results = []
    const pacificCells = generatePacific()
    const atlanticCells = generateAtlantic();

    function generatePacific() {
        let pacific = []
        // Go left with first col
        for (var row = 0; row < matrix.length; row++) {
            let cell = [row, -1]
            pacific.push(cell.join(','))
        }
        // Go up in first row
        for (var col = 0; col < matrix[0].length; col++) {
            let cell = [-1, col]
            pacific.push(cell.join(','))
        }
        return pacific;
    }

    function generateAtlantic() {
        let atlantic = []
        // go right with last col
        for (var row = 0; row < matrix.length; row++) {
            let cell = [row, matrix[row].length]
            atlantic.push(cell.join(','))
        }
        // go down with last row
        for (var col = 0; col < matrix[matrix.length - 1].length; col++) {
            let cell = [matrix.length, col]
            atlantic.push(cell.join(','))
        }
        return atlantic
    }

    function findOcean(row, col, ocean) {
        let stack = [[row, col]]
        let seen = {}
        while (stack.length) {
            let current = stack.pop();
            let row = current[0]
            let col = current[1]
            let val = matrix[row][col]
            let currentString = [row, col].join(',')
            seen[currentString] = true
            // check up
            let upVal = [row - 1, col].join(',')
            if (ocean.indexOf(upVal) > -1) {
                // found it in target ocean
                return true
            } else if (row - 1 >= 0) {
                let up = matrix[row - 1][col]
                if (up <= val && !seen[upVal]) {
                    stack.push([row-1, col])
                }    
            }
            
            // check left
            let leftVal = [row, col -1].join(',')
            if (ocean.indexOf(leftVal) > -1) {
                return true
            } else if (col - 1 >= 0) {
                let left = matrix[row][col - 1]
                if (left <= val && !seen[leftVal]) {
                    stack.push([row, col-1])
                }
            }

            // check right
            let rightVal = [row, col + 1].join(',')
            if (ocean.indexOf(rightVal) > -1) {
                return true
            } else if ( col + 1 < matrix[row].length) {
                let right = matrix[row][col+1]
                if (right <= val && !seen[rightVal]) {
                    stack.push([row, col+1])
                }    
            }
            
            // check down
            let downVal = [row + 1, col].join(',')
            if (ocean.indexOf(downVal) > -1){
                return true
            } else if ( row + 1 < matrix.length) {
                let down = matrix[row + 1][col]
                if (down <= val && !seen[downVal]) {
                    stack.push([row + 1, col])
                }
            }

        }
        return false
    }

    for (row in matrix) {
        let rowInt = parseInt(row, 10)
        for (col in matrix[row]) {
            let colInt = parseInt(col, 10)
            let foundPacific = findOcean(rowInt, colInt, pacificCells)
            let foundAtlantic = findOcean(rowInt, colInt, atlanticCells)
            if (foundPacific && foundAtlantic) {
                results.push([rowInt, colInt])
            }
        }
    }
    // console.log(results);
    return results
};


// console.log("starting tests...")
pacificAtlantic([
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  [44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 13],
  [43, 80, 81, 82, 83, 84, 85, 86, 87, 88, 55, 14],
  [42, 79, 108, 109, 110, 111, 112, 113, 114, 89, 56, 15],
  [41, 78, 107, 128, 129, 130, 131, 132, 115, 90, 57, 16],
  [40, 77, 106, 127, 140, 141, 142, 133, 116, 91, 58, 17],
  [39, 76, 105, 126, 139, 144, 143, 134, 117, 92, 59, 18],
  [38, 75, 104, 125, 138, 137, 136, 135, 118, 93, 60, 19],
  [37, 74, 103, 124, 123, 122, 121, 120, 119, 94, 61, 20],
  [36, 73, 102, 101, 100, 99, 98, 97, 96, 95, 62, 21],
  [35, 72, 71, 70, 69, 68, 67, 66, 65, 64, 63, 22],
  [34, 33, 32, 31, 30, 29, 28, 27, 26, 25, 24, 23]
]);
// assert.equal(pacificAtlantic([
//     [3, 3, 3, 3, 3, 3],
//     [3, 0, 3, 3, 0, 3],
//     [3, 3, 3, 3, 3, 3],
// ]), [
//         [0,0],[0,1],[0,2],[0,3],[0,4],[0,5],
//         [1,0],[1,2],[1,3],[1,5],
//         [2,0],[2,1],[2,2],[2,3],[2,4],[2,5]
//     ])
// assert.equal(pacificAtlantic([
//     [1, 2, 2, 3, 5],
//     [3, 2, 3, 4, 4],
//     [2, 4, 5, 3, 1],
//     [6, 7, 1, 4, 5],
//     [5, 1, 1, 2, 4],
// ]), [[0, 4], [1, 3], [1, 4], [2, 2], [3, 0], [3, 1], [4, 0]])
// assert.deepEqual(pacificAtlantic([
//     [5, 5],
//     [6, 2],
// ]), [[0, 1], [1, 0]])
// console.log("passed!")

var assert = require("assert");

var searchMatrix = function(matrix, target) {
  /*
     1. Check the upper right item
     2. if match done
     3. if greater than the target, move left
     4. if less than the target, move down a row
    */
  if (!matrix.length) {
    return false;
  }
  let row = 0;
  let col = matrix[0].length - 1;

  while (row < matrix.length && col > -1) {
    // console.log("checking: ", row, col)
    const value = matrix[row][col];
    if (value === target) {
      return true;
    }
    if (value < target) {
      // we are currenly less, so move down
      row++;
    } else {
      // we are currently greater than target, so move left
      col--;
    }
  }
  return false;

  // if (matrix.length === 0) {
  //     return false;
  // }

  // let target_row_idx = 0;

  // if (matrix.length !== 1) {
  //     let low_row_idx = 0;
  //     let high_row_idx = matrix.length;
  //     let potential_row_idx;

  //     // Isolate down to one potential row
  //     while (high_row_idx - low_row_idx > 1) {
  //         potential_row_idx = Math.floor((high_row_idx + low_row_idx) / 2)
  //         potential_value = matrix[potential_row_idx][0]
  //         console.log("low: ", low_row_idx)
  //         console.log("potential: ", potential_row_idx)
  //         console.log("high: ", high_row_idx)
  //         if (target < potential_value) {

  //             // search left
  //             high_row_idx = potential_row_idx - 1
  //         } else if (target === potential_value) {
  //             // done
  //             return true;
  //         } else { // target is greater than beginning of potential row
  //             // Check the immediate next row
  //             const nextRow = potential_row_idx + 1
  //             if (nextRow < matrix.length) {
  //                 if (matrix[nextRow][0] > target) {
  //                     low_row_idx = potential_row_idx
  //                     break;
  //                 }
  //             }
  //             // search right
  //             low_row_idx = potential_row_idx + 1
  //         }
  //     }

  //     console.log("--------------------------")
  //     console.log("low: ", low_row_idx)
  //     console.log("potential: ", potential_row_idx)
  //     console.log("high: ", high_row_idx)
  //     target_row_idx = potential_row_idx
  // }
  // console.log("target_row_idx", target_row_idx)

  // if (target_row_idx > matrix.length - 1) {
  //     return false
  // }
  // let row = matrix[target_row_idx];
  // console.log("row: ", row)

  // if (row.length === 1) {
  //     if (row[0] === target) {
  //         return true
  //     } else {
  //         return false;
  //     }
  // }
  // console.log("row: ", row, "target: ", target)
  // let low_col_idx = 0
  // let high_col_idx = row.length;
  // while (high_col_idx - low_col_idx > 1) {
  //     let middle_col_idx = Math.floor((high_col_idx + low_col_idx)/2)
  //     // console.log(low_col_idx, middle_col_idx, high_col_idx)
  //     let middle_value = row[middle_col_idx]
  //     console.log("middle value: ", middle_value)
  //     if (target < middle_value) {
  //         // search left
  //         // console.log("search lleft")
  //         high_col_idx = middle_col_idx
  //     } else if (target === middle_value) {
  //         // found it
  //         return true;
  //     } else {
  //         // search right
  //         // console.log("search right")
  //         low_col_idx = middle_col_idx + 1
  //     }
  // }

  // if (low_col_idx == high_col_idx) {
  //     return false
  // } else {
  //     return target === row[low_col_idx]
  // }
};

console.log("start");
assert.equal(
  searchMatrix(
    [
      [-9, -8, -8, -8],
      [-7, -6, -5, -5],
      [-3, -1, 0, 0],
      [2, 3, 4, 5],
      [7, 7, 7, 7],
      [9, 9, 10, 10]
    ],
    10
  ),
  true
);
assert.equal(
  searchMatrix(
    [
      [-9, -7, -7, -5, -3],
      [-1, 0, 1, 3, 3],
      [5, 7, 9, 11, 12],
      [13, 14, 15, 16, 18],
      [19, 21, 22, 22, 22]
    ],
    -4
  ),
  false
);

assert.equal(
  searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 50]], 11),
  true
);

assert.equal(searchMatrix([[1], [3]], 4), false);

assert.equal(searchMatrix([[1], [3]], 3), true);

assert.equal(searchMatrix([[1, 1]], 1), true);

assert.equal(searchMatrix([[1, 3]], 3), true);

assert.equal(searchMatrix([[1]], 1), true);
assert.equal(searchMatrix([[1]], 3), false);

assert.equal(
  searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 50]], 3),
  true
);
assert.equal(
  searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 50]], 13),
  false
);

console.log("done!");

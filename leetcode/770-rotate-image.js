const assert = require('assert');

// var rotate = function(matrix) {
//   function moveRight(row, col, distance, boundary) {
//     while (distance && col < boundary) {
//       col++;
//       distance--;
//     }
//     while (distance) {
//       row++;
//       distance--;
//     }
//     return [row, col, distance]
//   }

//   function moveDown(row, col, distance, boundary) {
//     while (distance && row < boundary) {
//       row++;
//       distance--;
//     }
//     while (distance) {
//       col--;
//       distance--;
//     }
//     return [row, col, distance];
//   }

//   function moveLeft(row, col, distance, boundary) {
//     while (distance && col > boundary) {
//       col--;
//       distance--;
//     }
//     while (distance) {
//       row--;
//       distance--;
//     }
//     return [row, col, distance]
//   }

//   function moveUp(row, col, distance, boundary) {
//     while (distance && row > boundary) {
//       row--;
//       distance--;
//     }
//     while (distance) {
//       col++;
//       distance--;
//     }
//     return [row, col, distance]
//   }

//   function get_next_space(row, col, distance, direction, boundaries) {
//     let moves = [];
//     switch(direction) {
//       case 'right':
//         moves = moveRight(row, col, distance, boundaries[3]);
//         console.log("move right: ", moves);
//         break;
//       case 'down':
//         moves = moveDown(row, col, distance, boundaries[1]);
//         console.log("move down: ", moves);
//         break;
//       case 'left':
//         moves = moveLeft(row, col, distance, boundaries[2]);
//         console.log("move left: ", moves);
//         break;
//       case 'up':
//         moves = moveUp(row, col, distance, boundaries[0]);
//         console.log("move up: ", moves);
//         break;
//     }
//     return moves;
//   }


//   let seen = new Set();
//   let moves_per_layer = 4 * (matrix.length - 1);
//   seen.add(moves_per_layer)
//   let moves_made_per_layer = 0;
//   let layer_row_start = 0;
//   let layer_row_end = matrix.length - 1;
//   let layer_col_start = 0;
//   let layer_col_end = matrix.length - 1;

//   let boundaries = [layer_row_start, layer_row_end, layer_col_start, layer_col_end];


//   let col = layer_col_start;
//   let row = layer_row_start;
//   let current = matrix[row][col];
//   let moves = ['right', 'down', 'left', 'up']
//   let moveIdx = 0

//   while (moves_made_per_layer < moves_per_layer) {
//     console.log("current: ", current, "row: ", row, "col: ", col, "matrix: ", matrix);
//     let [r, c, _] = get_next_space(row, col, layer_row_end - layer_col_start, moves[moveIdx], boundaries);
//     let next = matrix[r][c];
//     console.log("next: ", next, "r: ", r, "c: ", c);
//     matrix[r][c] = current;
//     current = next;
//     row = r;
//     col = c;
//     moveIdx++;
//     if (moveIdx > moves.length -1) {
//       moveIdx = 0;
//     }
//     moves_made_per_layer++;
//     if (moves_made_per_layer % 4 === 0) {
//       console.log("hi: ", row, col)
//       col++;
//       current = matrix[row][col];
//     }
//     // if I have done all the moves for this layer, move to the next layer
//     if (moves_made_per_layer === moves_per_layer) {
//       console.log("MOVING TO NEXT LAYER")
//       moves_per_layer--;
//       if (seen.has(moves_per_layer)) {
//         break;
//       }
//       moves_made_per_layer = 0
//       layer_row_start++;
//       layer_row_end--;
//       layer_col_start++;
//       layer_col_end
//       row = layer_row_start;
//       col = layer_col_start;
//       if (matrix[layer_row_start][layer_col_start] === matrix[layer_row_end][layer_col_end]) {
//         break;
//       }
//       if (layer_row_end - layer_row_start === 0) {
//         break;
//       }
//     }
//   }
//   console.log("moves_made_per_layer: ", moves_made_per_layer);
//   return matrix;
// }

var rotate_matrix = function(matrix) {
  
  let row_start = 0;
  let row_end = matrix.length - 1;
  let col_start = 0;
  let col_end = matrix.length - 1;
  
  let moves_per_layer = 4 * (row_end + row_start);
  // console.log("moves per layer: ", moves_per_layer, row_end, row_start);
  let moves_made_per_layer = 0;

  let row = row_start;
  let col = col_start;
  let current_value = matrix[row][col];
  while (moves_made_per_layer < moves_per_layer) {
    // console.log(matrix, current_value, row, col, moves_made_per_layer, moves_per_layer)
    if (row === row_start) {
      row = col;
      col = col_end;
      let tmp = matrix[row][col];
      matrix[row][col] = current_value;
      current_value = tmp;
      moves_made_per_layer++;
    } else if (col === col_end && row !== row_end) {
      col = row_end - row + row_start;
      row = row_end;
      let tmp = matrix[row][col];
      matrix[row][col] = current_value;
      current_value = tmp;
      moves_made_per_layer++;
    } else if (row === row_end) {
      row = col;
      col = col_start;
      let tmp = matrix[row][col];
      matrix[row][col] = current_value;
      current_value = tmp;
      moves_made_per_layer++;
    } else if (col === col_start) {
      col = row_end - row + row_start;
      row = row_start;
      let tmp = matrix[row][col];
      matrix[row][col] = current_value;
      current_value = tmp;
      moves_made_per_layer++;
    }
    // if moves === moves_per_layer, move to next inner layer
    // TODO
    if (moves_made_per_layer === moves_per_layer) {
      col_start++;
      col_end--;
      row_start++;
      row_end--;
      if (col_start > col_end)  {
        // console.log("break here")
        break;
      }
      col = col_start;
      row = row_start;
      current_value = matrix[row][col];
      moves_made_per_layer = 0;
      moves_per_layer = 4 * (row_end - row_start);
      console.log("hi", col_start, col_end, row_start, row_end, moves_made_per_layer, moves_per_layer)
    } else if (moves_made_per_layer % 4 === 0) {
      col++;
      current_value = matrix[row][col];
      // console.log("move to next col")
    }
    
  } 

  // console.log("matrix: ", matrix);
  return matrix;
}


console.log("start")
assert.equal(true, true);
const matrix = [[1,2,3],[4,5,6],[7,8,9]];
assert.deepEqual(rotate_matrix(matrix), [[7,4,1],[8,5,2],[9,6,3]]);
assert.deepEqual(rotate_matrix(
  [
    [5,1,9,11],
    [2,4,8,10],
    [13,3,6,7],
    [15,14,12,16]
  ]), 
  [
    [15,13,2,5],
    [14,3,4,1],
    [12,6,8,9],
    [16,7,10,11]]);
    /*
    [ 15, 13, 2, 5 ],
    [ 14, 3, 8, 1 ],
    [ 12, 6, 4, 9 ],
    [ 16, 7, 10, 11 ]
    */
    // [ 15, 2, 13, 5 ],
    // [ 14, 4, 8, 1 ],
    // [ 12, 3, 6, 9 ],
    // [ 16, 10, 7, 11 ]
assert.deepEqual(rotate_matrix([[1,2],[3,4]]), [[3,1],[4,2]]);
assert.deepEqual(rotate_matrix([
  [1,2,3,4,5],
  [6,7,8,9,10],
  [11,12,13,14,15],
  [16,17,18,19,20],
  [21,22,23,24,25]
]), [
  [21,16,11,6,1],
  [22,17,12,7,2],
  [23,18,13,8,3],
  [24,19,14,9,4],
  [25,20,15,10,5]]);
  /*
[ [21,16,11,6,1],
  [22,19,8,17,2],
  [23,12,13,8,3],
  [24,14,18,9,4],
  [25,20,15,10,5]]*/
console.log("end")

const assert = require('assert');

var rotate = function(matrix) {

  function moveRight(row, col, distance, boundary) {
    while (distance && col < boundary) {
      col++;
      distance--;
    }
    while (distance) {
      row++;
      distance--;
    }
    return [row, col, distance]
  }

  function moveDown(row, col, distance, boundary) {
    while (distance && row < boundary) {
      row++;
      distance--;
    }
    while (distance) {
      col--;
      distance--;
    }
    return [row, col, distance];
  }

  function moveLeft(row, col, distance, boundary) {
    while (distance && col > boundary) {
      col--;
      distance--;
    }
    while (distance) {
      row--;
      distance--;
    }
    return [row, col, distance]
  }

  function moveUp(row, col, distance, boundary) {
    while (distance && row > boundary) {
      row--;
      distance--;
    }
    while (distance) {
      col++;
      distance--;
    }
    return [row, col, distance]
  }

  function get_next_space(row, col, distance, direction, boundaries) {
    let moves = [];
    switch(direction) {
      case 'right':
        moves = moveRight(row, col, distance, boundaries[3]);
        console.log("move right: ", moves);
        break;
      case 'down':
        moves = moveDown(row, col, distance, boundaries[1]);
        console.log("move down: ", moves);
        break;
      case 'left':
        moves = moveLeft(row, col, distance, boundaries[2]);
        console.log("move left: ", moves);
        break;
      case 'up':
        moves = moveUp(row, col, distance, boundaries[0]);
        console.log("move up: ", moves);
        break;
    }
    return moves;
  }

  let moves_per_layer = 4 * (matrix.length - 1);
  let moves_made_per_layer = 0;
  let layer_row_start = 0;
  let layer_row_end = matrix.length - 1;
  let layer_col_start = 0;
  let layer_col_end = matrix.length - 1;

  let boundaries = [layer_row_start, layer_row_end, layer_col_start, layer_col_end];


  let col = layer_col_start;
  let row = layer_row_start;
  let current = matrix[row][col];
  let moves = ['right', 'down', 'left', 'up']
  let moveIdx = 0
  while (moves_made_per_layer < moves_per_layer) {
    console.log("current: ", current, "row: ", row, "col: ", col, "matrix: ", matrix);
    let [r, c, _] = get_next_space(row, col, layer_row_end - layer_col_start, moves[moveIdx], boundaries);
    let next = matrix[r][c];
    console.log("next: ", next, "r: ", r, "c: ", c);
    matrix[r][c] = current;
    current = next;
    row = r;
    col = c;
    moveIdx++;
    if (moveIdx > moves.length -1) {
      moveIdx = 0;
    }
    moves_made_per_layer++;
    if (moves_made_per_layer % 4 === 0) {
      console.log("hi: ", row, col)
      col++;
      current = matrix[row][col];
    }
    // if I have done all the moves for this layer, move to the next layer
    if (moves_made_per_layer === moves_per_layer) {
      console.log("MOVING TO NEXT LAYER")
      moves_per_layer--;
      moves_made_per_layer = 0
      layer_row_start++;
      layer_row_end--;
      layer_col_start++;
      layer_col_end
      row = layer_row_start;
      col = layer_col_start;
      if (matrix[layer_row_start][layer_col_start] === matrix[layer_row_end][layer_col_end]) {
        break;
      }
      if (layer_row_end - layer_row_start === 0) {
        break;
      }
    }
  }
  console.log("moves_made_per_layer: ", moves_made_per_layer);
  return matrix;
}


console.log("start")
assert.equal(true, true);
const matrix = [[1,2,3],[4,5,6],[7,8,9]];
assert.deepEqual(rotate(matrix), [[7,4,1],[8,5,2],[9,6,3]]);
console.log("end")

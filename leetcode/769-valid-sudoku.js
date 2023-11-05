var assert = require("assert");

function getBoxNumber(col, row) {
  if (col < 3 && row < 3) return 1;
  if (col < 3 && row < 6) return 2;
  if (col < 3 && row < 10) return 3;
  if (col < 6 && row < 3) return 4;
  if (col < 6 && row < 6) return 5;
  if (col < 6 && row < 10) return 6;
  if (col < 10 && row < 3) return 7;
  if (col < 10 && row < 6) return 8;
  return 9;
}


const isValidSudoku = function(board) {
  const rows = {}
  const cols = {}
  const boxes = {
    1: new Set(),
    2: new Set(),
    3: new Set(),
    4: new Set(),
    5: new Set(),
    6: new Set(),
    7: new Set(),
    8: new Set(),
    9: new Set(),
  }
  
  for (let col = 0; col < board.length; col++) {
    for (let row = 0; row < board.length; row++) {
      current = board[col][row];
      if (current === ".") continue;
      // check row
      if (!(row in rows)) {
        rows[row] = new Set();
        rows[row].add(current);
      } else if (rows[row].has(current)) {
        return false
      } else {
        rows[row].add(current);
      }
      // check col
      if (!(col in cols)) {
        cols[col] = new Set();
        cols[col].add(current);
      } else if (cols[col].has(current)) {
        return false;
      } else {
        cols[col].add(current);
      }
      // check box
      const boxNumber = getBoxNumber(col, row);
      if (boxes[boxNumber].has(current)) {
        return false;
      }
      boxes[boxNumber].add(current);
    }
  }

  return true
}

console.log("start")
board = 
[["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]];
assert.equal(isValidSudoku(board), false);
console.log("done")

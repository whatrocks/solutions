/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
  const results = [];
  if (n === 1) {
    results.push(["Q"]);
    return results;
  }

  const blankBoard = [];
  for (let i = 0; i < n; i++) {
    let row = [];
    for (let j = 0; j < n; j++) {
      row.push(0);
    }
    blankBoard.push(row);
  }

  var isValid = function(board, potentialRow, potentialCol) {
    // check left
    for (let col = 0; col < potentialCol; col++) {
      if (board[potentialRow][col]) {
        return false;
      }
    }
    // // check up
    for (let row = 0; row < potentialRow; row++) {
      if (board[row][potentialCol]) {
        return false;
      }
    }
    let checkCol = potentialCol;
    let checkRow = potentialRow;
    while (checkCol > -1 && checkRow > -1) {
        if (board[checkRow][checkCol]) {
            return false;
        }
        checkCol--
        checkRow--
    }
    checkCol = potentialCol;
    checkRow = potentialRow;
    while (checkCol < board[0].length && checkRow > -1) {
        if (board[checkRow][checkCol]) {
            return false;
        }
        checkCol++
        checkRow--
    }
    return true;
  };

  var traverse = function(board, numberOfQueensPlaced, startRow) {
    if (numberOfQueensPlaced === n) {
      const copy = board.slice().map(row => row.slice())
      results.push(copy);
    }
    for (var row = startRow; row < board.length; row++) {
      for (var col = 0; col < board[row].length; col++) {
        const canPlaceQueen = isValid(board, row, col);
        if (canPlaceQueen) {
          // place the queen
          board[row][col] = 1;
          // traverse with updated board
          traverse(board.slice(), ++numberOfQueensPlaced, row + 1);
          // then remove the queen
          board[row][col] = 0;
          numberOfQueensPlaced--;
        }
        
      }
    }
  };

  traverse(blankBoard, 0, 0, 0);

  // TODO results need to be arrays of strings for each row
  const mapped = results.map(result => {
    return result.map(resultRow => {
        let row = ''
        resultRow.forEach(item => {
            if (item === 0) {
                row += '.'
            } else {
                row += 'Q'
            }
        })
        return row
    })

    // return resultArray 
  })
  return mapped;
};

console.log(solveNQueens(7));

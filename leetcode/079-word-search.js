var exist = function(board, word) {
    if (!board || !word) {
        return false;
    }

    let foundIt = false;

    const dfs = function(row, col, markedGrid, wordSoFar) {
        // console.log("markedGrid: ", markedGrid);
        if (foundIt) {
            return
        }
        const newMarkedGrid = markedGrid.map(row => row.slice())
        const letter = newMarkedGrid[row][col];
        // console.log("row: ", row, "; col: ", col, "word:  ", wordSoFar, "; letter: ", letter)
        // console.log("grid: ", markedGrid)
        if (!letter) {
            return
        }
        let nextWord = wordSoFar + letter;
        if (word === nextWord) {
            foundIt = true;
            // console.log("Found it!!")
            return;
        } else if (word.indexOf(nextWord) === 0) {
            // keep going
            markedGrid[row][col] = null;
            // up
            if (row - 1 >= 0) {
                dfs(row - 1, col, markedGrid.map(row => row.slice()), nextWord);
            }

            // down
            if (row + 1 < markedGrid.length) {
                dfs(row + 1, col, markedGrid.map(row => row.slice()), nextWord)
            }

            // left
            if (col - 1 >= 0) {
                dfs(row, col - 1, markedGrid.map(row => row.slice()), nextWord)
            }

            // right
            if (col + 1 < markedGrid[row].length) {
                dfs(row, col + 1, markedGrid.map(row => row.slice()), nextWord)
            }
        }
    }

    for (var row = 0; row < board.length; row++) {
        for (var col = 0; col < board[row].length; col++) {
            const letter = board[row][col]
            if (letter === word.charAt(0)) {
                const grid = board.map(row => row.slice())
                dfs(row, col, grid, '')
                if (foundIt) {
                    return true
                }
            }
        }
    }

    return false
}

// console.log(exist([
//     ['C','A','A'],
//     ['A','A','A'],
//     ['B','C','D']
//   ],"AAB")) // true

  console.log(exist([
    ['A','B','C','E'],
    ['S','F','E','S'],
    ['A','D','E','E']
  ],"ABCESEEEFS")) // true


// console.log(exist([
//     ['A','B','C','E'],
//     ['S','F','C','S'],
//     ['A','D','E','E']
//   ],"ABCCED")) // true
// console.log(exist([
//     ['A','B','C','E'],
//     ['S','F','C','S'],
//     ['A','D','E','E']
//   ],"SEE")) // true
// console.log(exist([
//     ['A','B','C','E'],
//     ['S','F','C','S'],
//     ['A','D','E','E']
//   ],"ABCB")) // true
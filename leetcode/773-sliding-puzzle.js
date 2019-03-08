/**
 * @param {number[][]} board
 * @return {number}
 */
var slidingPuzzle = function(board) {
    var isValid = function(b) {
        let valid = false;
        const row1 = b[0].join()
        const row2 = b[1].join()
        if (row1 === '1,2,3' && row2 === '4,5,0') {
            valid = true
        }
        return valid;
    }
    
    

    let moves = 0;
    return moves;
};

console.log(slidingPuzzle([[1,2,3],[4,0,5]]))
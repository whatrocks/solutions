var assert = require('assert');

var openLock = function(deadends, target) {
    if (target === '0000') {
        return 0;
    }

    if (deadends.indexOf('0000') > -1) {
        return -1
    }

    function generateMoves(lock) {
        let moves = []
        let currentWheels = lock.split('')
        for (var i = 0; i < currentWheels.length; i++) {
            let value = parseInt(currentWheels[i], 10);
            let incrementedValue = value + 1;
            if (incrementedValue >= 10) {
                incrementedValue = 0
            }
            let decrementedValue = value -1;
            if (decrementedValue < 0) {
                decrementedValue = 9
            }
            currentWheels.splice(i, 1, incrementedValue);
            moves.push(currentWheels.join(''))
            currentWheels.splice(i, 1, decrementedValue);
            moves.push(currentWheels.join(''))
            currentWheels = lock.split('')
        }
        return moves
    }

    let queue = ['0000']
    let depth = 1
    let tried_cache = {}
    while (queue.length) {
        let next_level = []
        let current_count = queue.length
        while (current_count > 0) {
            let lock = queue.shift();
            if (tried_cache[lock]) {
                current_count--
                continue
            }
            tried_cache[lock] = true
            let possible_moves = generateMoves(lock)
            for (move of possible_moves) {
                if (move === target) {
                    return depth
                } else if (deadends.indexOf(move) === -1) {
                    next_level.push(move)
                }
            }
            current_count--
        }
        depth += 1
        queue = next_level
    }

    return -1;
}

console.log("start!")
assert.equal(openLock(["0000"], '8888'), -1)
// assert.equal(openLock(["0201","0101","0102","1212","2002"], '0202'), 6)
// assert.equal(openLock(["8888"], '0009'), 1)
// assert.equal(openLock(["0000"], '8888'), -1)
// assert.equal(openLock(["8887","8889","8878","8898","8788","8988","7888","9888"], '8888'), -1)
console.log("tests pass!")


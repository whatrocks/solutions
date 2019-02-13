var assert = require('assert');


// Time: O(n) Linear
// Space: O(1) constant
function checkoff(string1) {
    if (string1.length < 26) {
        return false;
    }
    const letters = 'abcdefghijklmnopqrstuvwxyz'.split('')

    // Loop through string1
    for (var i = 0; i < string1.length; i++) {
        // if letter in letters
        const index = letters.indexOf(string1[i]);
        if (index > -1) {
            letters[index] = null
        }
    }
    // console.log(letters);

    // Loop through letters
    for (var i = 0; i < letters.length; i++) {
        if (letters[i]) {
            return false
        }
    }
        // if letter is not null or exists
            // return false

    return true
}

console.log("starting")
assert.equal(true, checkoff('the quick brown fox jumps over the lazy dog'))
assert.equal(false, checkoff('the quick bro'))
assert.equal(false, checkoff('the dumb looking person brow is a great great great jumps over the lazy dog'))
console.log("done!")



function dictVersion(string1) {
    var letterDict = {}
    for (var letter of 'abcdefghijklmnopqrstuvwxyz') {
        letterDict[letter] = 0;
    }
    for (var i = 0; i < string1.length; i++ ) {
        const letter = string1[i]
        if (letter in letterDict) {
            letterDict[letter]++
        }
    }
    for (var count of Object.values(letterDict)) {
        if (!count) {
            return false
        }
    }
    return true;
}


console.log("starting")
assert.equal(true, dictVersion('the quick brown fox jumps over the lazy dog'))
assert.equal(false, dictVersion('the quick bro'))
assert.equal(false, dictVersion('the dumb looking person brow is a great great great jumps over the lazy dog'))
console.log("done!")


function setVersion(string1) {
    if (string1 < 26) return false;
    const letterSet = new Set('abcdefghijklmnopqrstuvwxyz'.split(''))
    for (var letter of string1) {
        if (letterSet.has(letter)) {
            letterSet.delete(letter)
        }
    }
    return letterSet.size === 0

}


console.log("starting")
assert.equal(true, setVersion('the quick brown fox jumps over the lazy dog'))
assert.equal(false, setVersion('the quick bro'))
assert.equal(false, setVersion('the dumb looking person brow is a great great great jumps over the lazy dog'))
console.log("done!")




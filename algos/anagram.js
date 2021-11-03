const assert = require('assert');

// Quadratic time O(n2)
function anagramCheckingOff(string1, string2) {
  if (string1.length != string2.length) return false
  const string2ToCheckOff = string2.split('');

  for (let i =0; i < string1.length; i++) {
    let letterFound = false;
    for (let j = 0; j < string2ToCheckOff.length; j++) {
      if (string1[i] === string2ToCheckOff[j]) {
        string2ToCheckOff[j] = null;
        letterFound=true
        break
      }
    }
    if (!letterFound) return false;
  }
  return true;
}

console.log("Starting tests..")
assert.equal(true, anagramCheckingOff('abcd', 'dcba'));
assert.equal(false, anagramCheckingOff('abcd','abcc'));
console.log("Tests pass!")


// Sorting is O(n2) or O(n log n)
function anagramSortAndCompare(string1, string2) {
  if (string1.length !== string2.length) return false

  const sortedString1 = string1.split('').sort();
  const sortedString2 = string2.split('').sort();
  
  for (let i = 0; i < sortedString1.length; i++) {
    if (sortedString1[i] !== sortedString2[i]) return false
  }

  return true
}

console.log("Starting tests..")
assert.equal(true, anagramSortAndCompare('abcd', 'dcba'));
assert.equal(false, anagramSortAndCompare('abcd','abcc'));
console.log("Tests pass!")

// O(n) linear time!
function anagramCountCompare(string1, string2) {

  function getLetterPosition(letter) {
    return letter.charCodeAt() - 'a'.charCodeAt();
  }

  const string1LetterCounts = new Array(26).fill(0);
  const string2LetterCounts = new Array(26).fill(0);

  for (let s of string1) {
    const letterPos = getLetterPosition(s);
    string1LetterCounts[letterPos]++;
  }

  for (let s of string2) {
    const letterPos = getLetterPosition(s);
    string2LetterCounts[letterPos]++;
  }

  for (let i = 0; i < string1LetterCounts.length; i++) {
    if (string1LetterCounts[i] !== string2LetterCounts[i]) {
      return false
    }
  }
  return true
}
console.log("Starting tests..")
assert.equal(true, anagramCountCompare('abcd', 'dcba'));
assert.equal(false, anagramCountCompare('abcd','abcc'));
console.log("Tests pass!")




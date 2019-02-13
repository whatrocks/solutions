var assert = require('assert')

function anagramCheckingOff(string1, string2) {
	if (string1.length !== string2.length) return false

	const string2ToCheckOff = string2.split('')

	for (let i = 0; i < string1.length; i++) {
		let letterFound = false;
		for (let j = 0; j < string2ToCheckOff.length; j++) {
			string2ToCheckOff[j] = null;
				if (string1[i] === string2ToCheckOff[j]) {
				letterFound = true;
				break;
			}
		}
		if (!letterFound) return false	
	}
	return true;

}

/*
console.log("start")
assert.equal(true, anagramCheckingOff('abcd','dcba'))
assert.equal(false, anagramCheckingOff('abcd', 'abcc'))
console.log("end")
*/

function sortAndCompare(string1, string2) {
	if (string1.length !== string2.length) {
		return false
	}

	var sorted1 = string1.split('').sort()
	var sorted2 = string2.split('').sort()
	
	for (let i = 0; i < sorted1.length; i++) {
		if (sorted1[i] !== sorted2[i]) return false
	}
	return true;
}


// console.log("start")
// assert.equal(true, sortAndCompare('abcd','dcba'))
// assert.equal(false, sortAndCompare('abcd', 'abcc'))
// console.log("end")


function anagramCountCompare(string1, string2) {
	function getLetterPosition(letter) {
		return letter.charCodeAt() - 'a'.charCodeAt()
	}

	const string1LetterCounts = new Array(26).fill(0);
	const string2LetterCounts = new Array(26).fill(0);

	for (let i = 0; i < string1.length; i++) {
		const letterPosition = getLetterPosition(string1[i])
		string1LetterCounts[letterPosition]++
	}

	for (let i = 0; i < string2.length; i++ ) {
		const letterPosition = getLetterPosition(string2[i])
		string2LetterCounts[letterPosition]++
	}

	for (let i = 0; i <string1LetterCounts.length; i++) {
		if (string1LetterCounts[i] !== string2LetterCounts[i]) {
			return false;
		}
	}

	return true
}	


// console.log("start")
// assert.equal(true, anagramCountCompare('abcd','dcba'))
// assert.equal(false, anagramCountCompare('abcd', 'abcc'))
// console.log("end")


function anagramCountCompareWithReduce(string1, string2) {

	function letterCountReducer(letterCounts, letter) {
		if (letterCounts[letter]) {
			letterCounts[letter]++
		} else {
			letterCounts[letter] = 1
		}
		return letterCounts
	}

	const string1LetterCounts = string1.split('').reduce(letterCountReducer, {})
	const string2LetterCounts = string2.split('').reduce(letterCountReducer, {})

	// console.log("1", string1LetterCounts);
	// console.log("2", string2LetterCounts);

	for (let letter in string1LetterCounts) {
		if (string1LetterCounts[letter] !== string2LetterCounts[letter]) {
			return false
		}
	}

	return string1.length === string2.length

}


console.log("start")
assert.equal(true, anagramCountCompareWithReduce('abcd','dcba'))
assert.equal(false, anagramCountCompareWithReduce('abcd', 'abcc'))
console.log("end")

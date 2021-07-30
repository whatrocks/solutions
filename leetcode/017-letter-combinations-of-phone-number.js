const letters = {
    "2": "abc",
    "3": "def",
    "4": "ghi",
    "5": "jkl",
    "6": "mno",
    "7": "pqrs",
    "8": "tuv",
    "9": "wxyz"
}

var letterCombinations = function(digits) {
    if (!digits.length) {
        return []
    }
    let result = []
    for (let digit of digits) {
        let nextResult = []
        const alpha = letters[digit]
        for (let letter of alpha) {
            if (!result.length) {
                nextResult.push(letter)
            } else {
                for (let word of result) {
                    nextResult.push(word+letter)
                }
            }    
        }
        result = nextResult
    }
    return result
};

console.log(letterCombinations("27"));
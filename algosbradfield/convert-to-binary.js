var assert = require('assert');


// Convert to binary
var convert_to_binary = function(decimal_number) {

    if (decimal_number === 0) {
        return '0'
    }

    // stack for remainders
    var remainders = []
    // divide by two
    while (decimal_number > 0) {
        remainder = decimal_number % 2
        remainders.push(remainder)
        decimal_number = Math.floor(decimal_number / 2)
    }

    // built another stack by poppoing
    var binarynumber = []
    while (remainders.length) {
        binarynumber.push(remainders.pop())
    }
    // join and retunr it
    return binarynumber.join('')
}

console.log("start")
assert.equal(convert_to_binary(10), '1010')
assert.equal(convert_to_binary(15), '1111')
assert.equal(convert_to_binary(0), '0')
assert.equal(convert_to_binary(1), '1')
console.log("end")
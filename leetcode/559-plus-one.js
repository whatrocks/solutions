const assert = require("assert");
var plusOne = function(digits) {
  const res = []
  let carry = 1;
  for (i = digits.length - 1; i > -1; i--) {
    let current = digits[i] + carry;
    carry = 0
    if (current > 9) {
      carry = 1
      current = 0
    }
    res.push(current);
  }
  if (carry) {
    res.push(carry);
  }
  return res.reverse();
}

assert.deepEqual(plusOne([9]), [1,0]);
console.log("done");



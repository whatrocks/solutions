var assert = require("assert");

/*
Input: string on only paren chars
Output: bool - true if valid
Rules for valid
    - open brackets must be closed by same time 
    - open must be closed in the correct order
    - empty string is valid
Constraints:
    - Time: none
    - Space: none
*/


// Time: O(n)
// Space: O(n)
var isValid = function(s) {
  if (!s.length) {
    return true;
  }
  if (s.length % 2 !== 0) {
    return false
  }
  const pairs = {
    "(": ")",
    "[": "]",
    "{": "}"
  };
  
  const stack = [];
  for (let char of s) {
      if (Object.keys(pairs).indexOf(char) > -1) {
          stack.push(char)
      } else {
          const last = stack.pop();
          if (char !== pairs[last]) {
              return false
          }
      }
  }
  return stack.length === 0;
};

console.log("start");
assert.equal(isValid("("), false);
assert.equal(isValid(")"), false);
assert.equal(isValid("()"), true);
assert.equal(isValid("()[]{}"), true);
assert.equal(isValid("(]"), false);
assert.equal(isValid("([)]"), false);
assert.equal(isValid("{()}"), true);
console.log("end!");

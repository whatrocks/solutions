var assert = require("assert");


function isPalindrome(s) {
  let LOWER = 'a'.charCodeAt();
  let UPPER = 'z'.charCodeAt();

  // lower and remove
  var cleaned = [];
  for (let c of s) {
    let lowered = c.toLowerCase();
    let code = lowered.charCodeAt();
    if (code >= LOWER && code <= UPPER) {
      cleaned.push(lowered);
    }
    if (code >= '0'.charCodeAt() && code <= '9'.charCodeAt()) {
      cleaned.push(lowered);
    }
  }
  for (let i = 0; i < cleaned.length; i++) {
    let rightIdx = cleaned.length - 1- i;
    if (i === rightIdx || i > rightIdx) {
      break;
    }
    let left = cleaned[i];
    let right = cleaned[cleaned.length - 1 - i];
    if (left !== right) return false; 
  }
  return true;
}

assert.equal(isPalindrome("A man, a plan, a canal: Panama"), true);

const assert = require("assert");

function reverse(str) {
  if (str.length === 1) {
    return str;
  }
  for (let i = 0; i < str.length; i++) {
    let rightIdx = str.length - 1 - i;
    if (i === rightIdx || i > rightIdx) {
      break;
    }
    let left = str[i];
    let right = str[rightIdx];
    let tmp = right;
    str[rightIdx] = left;
    str[i] = tmp;
  }
  return str;
}

assert.deepEqual(reverse(["h","e","l","l","o"]),["o","l","l","e","h"]);

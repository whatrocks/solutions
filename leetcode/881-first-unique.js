var assert = require("assert");

var firstUniqChar = function(s) {
  let freq = {};
  for (let c of s) {
    if (freq[c]) {
      freq[c] += 1;
    } else {
      freq[c] = 1;
    }
  }
  for (let c in s) {
    if (freq[s[c]] === 1) {
      return c
    }
  }
  return -1;
};

assert.equal(firstUniqChar("loveleetcode"),2);

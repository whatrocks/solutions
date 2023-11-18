var assert = require("assert");

var isAnagram = function(s, t) {
  if (s.length !== t.length) return false;
  
  let sFreq = {};
  let tFreq = {};
  
  // n
  for (let i = 0; i < s.length; i++) {
    let sChar = s[i];
    sFreq[sChar] = sFreq[sChar] + 1 || 1;
    let tChar = t[i];
    tFreq[tChar] = tFreq[tChar] + 1 || 1;
  }
  
  if (Object.keys(sFreq).length !== Object.keys(tFreq).length) {
    return false;
  }

  // n
  for (let key of Object.keys(sFreq)) {
    if (Object.keys(tFreq).indexOf(key) === -1) {
      return false;
    }
    if (sFreq[key] !== tFreq[key]) {
      return false;
    }
    delete tFreq[key];
  }
  if (Object.keys(tFreq).length) return false
  return true;
};

assert.equal(isAnagram("aa", "bb"),false);
assert.equal(isAnagram("rat", "car"),false);

var assert = require("assert");

var longestCommonPrefix = function(strs) {
  if (strs.length === 1){
    return strs[0];
  }
  let prefix = "";
  let is_done = false;
  let idx = 0;
  while (!is_done) {
    console.log("prefix: ", prefix);
    let letter = "";
    for (let str of strs) {
      if (!str.length) return ""
      if (idx >= str.length) {
        return prefix;
        break;
      }
      let c = str[idx];
      console.log("c: ", c);
      if (!letter) {
        letter = c;
      }
      if (c === letter) {
        continue;
      } else {
        letter = ""
        is_done = true;
        break
      }
    }
    prefix += letter
    idx++; 
  }
  return prefix;
};

const cases = [
  [["flower","flow","flight"], "fl"],
  [["dog", "racecar", "car"], ""],
  [["a"], "a"],
  [["ab", "a"], "a"],
  [["flower", "flower", "flower", "flower"], "flower"]
]

for (let c of cases) {
  assert.equal(longestCommonPrefix(c[0]),c[1]);
}
console.log("done");

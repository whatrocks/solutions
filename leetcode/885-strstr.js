var assert = require("assert");
var strStr = function(haystack, needle) {
  for (let i = 0; i < haystack.length; i++) {
    for (let j = 0; j <= needle.length; j++) {
      console.log(i,j);
      if (j === needle.length) {
        return i;
      }
      let h = haystack[i + j];
      let n = needle[j];
      if (h != n) {
        break;
      }
    }
  }  
  return -1;
};

const cases = [
  ["sadbutsad","sad", 0],
  ["leetcode","leeto", -1],
  ["sadbutsad","sad", 0],
]

for (let c of cases) {
  assert.equal(strStr(c[0], c[1]), c[2]);
}
console.log("done!");

const assert = require('assert');

var moveZeroes = function(nums) {
  // loop through with two pointers
  // if zero swap with next, next is current
  if (nums.length < 2) {
    return
  }
  for (let i = 0; i < nums.length - 1; i++) {
    let current = nums[i];
    if (current === 0) {
      for (j = i + 1; j < nums.length; j++) {
        let next = nums[j];
        if (next > 0) {
          let tmp = next;
          nums[j] = current;
          nums[i] = tmp;
          break;
        }
      }
    }
  }
  return nums;
}
assert.deepEqual(moveZeroes([0,1,0,3,12]),[1,3,12,0,0])
console.log("done!")

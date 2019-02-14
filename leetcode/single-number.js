var assert = require("assert");

// Given a non-empty array of integers, every element appears twice except for one. Find that single one.
// Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?
var singleNumber = function(nums) {
  // if (nums.length === 1) {
  //     return nums[0];
  // }

  // Input: array of ints
  // Output: the number that is not repeated
  // Constraints:
  // Time: O(n)
  // Space: O(1)
  // Exceptions: it's not going to be empty

  // BRUTE FORCE
  // Time: O(n)
  // Space: O(n)
  // var counts = {}
  // for (var i = 0; i < nums.length; i++) {
  //     const num = nums[i]
  //     if (!counts[num]) {
  //         counts[num] = 1
  //     } else {
  //         counts[num]++
  //     }
  // }
  // for (var key of Object.keys(counts)) {
  //     if (counts[key] === 1) {
  //         return key
  //     }
  // }

  // XOR solution
  // Time: On
  // Space: O1
  // let a = 0
  // for (let i = 0; i < nums.length; i++) {
  //     const num = nums[i]
  //     a  = a ^ num
  // }
  // return a;

  // Math solution
  // 2 * (all the numbers )
  const sum = nums.reduce((a, b) => {
    return a + b;
  }, 0);
  const set = new Set(nums);
  const setArray = Array.from(set)
  const setSum = setArray.reduce((a,b) => a + b, 0)
  return 2 * setSum - sum;
  // return (2 * new Set(nums)) - nums.reduce((a, b) => {})
};

console.log("start...");
assert.equal(singleNumber([22]), 22);
assert.equal(singleNumber([2, 2, 1]), 1);
assert.equal(singleNumber([4, 1, 2, 1, 2]), 4);
console.log("done!");

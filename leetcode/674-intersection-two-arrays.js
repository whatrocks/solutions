var assert = require("assert")

const intersect = function(nums1, nums2) {
  const nums1_count = {}
  // loop thru nums1
  for (let num of nums1) {
    if (nums1_count[num]) {
      nums1_count[num] += 1
    } else {
      nums1_count[num] = 1
    }
  }
  const nums2_count = {}
  for (let num of nums2) {
    if (nums2_count[num]) {
      nums2_count[num] +=1 
    } else {
      nums2_count[num] = 1
    }
  }
  const result = []
  for (let key of Object.keys(nums2_count)) {
    if (key in nums1_count) {
      let intersection = Math.min(nums2_count[key], nums1_count[key]);
      for (let i = 0; i < intersection; i++) {
        result.push(parseInt(key));
      }
    }
  }
  return result;
}

console.log("Start")
assert.deepEqual(intersect([1,2,2,1], [2,2]), [2,2]);
assert.deepEqual(intersect([4,9,5], [9,4,9,8,4]), [4,9]);
assert.deepEqual(intersect([1,2,2,1], [2]), [2]);
console.log("end");

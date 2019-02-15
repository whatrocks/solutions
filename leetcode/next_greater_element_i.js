var assert = require('assert')

var nextGreaterElement = function(nums1, nums2) {
    
    // Time O(n*m)
    const result = []

    for (let i = 0; i < nums1.length; i++) {
        let foundIt = false;
        let foundGreater = false
        for (let j = 0; j < nums2.length; j++) {
            if (nums1[i] === nums2[j]) {
                foundIt = true;
                continue;
            }
            if (foundIt && nums2[j] > nums1[i]) {
                result.push(nums2[j])
                foundGreater = true
                break;
            }
        }
        if (!foundGreater) {
            result.push(-1)
        }

    }
    return result;


}


console.log("start")
console.log(nextGreaterElement([4,1,2], [1,3,4,2]), [-1, 3, -1])
console.log(nextGreaterElement([2,4], [1,2,3,4]), [3, -1])
console.log("end")
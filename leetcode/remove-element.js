var assert = require('assert');

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    // inputs: array of numbers and a value
    // output: length of the modified array
    // constraints: O(1) space!

    if (!nums.length) {
        return 0;
    }

    // Time: O(n)
    // Space: O(n)
    // without constraint:
        // loop through the list
            // if not value, append to the other list
            // return length of other list
    // var result = []
    // for (var i = 0; i < nums.length; i++) {
    //     if (nums[i] !== val) {
    //         result.push(nums[i])
    //     }
    // }
    // return result.length;


    // With constraint:
    // Time: O(n)
    // Space: O(1)

    // how to iterate through a list that grows smaller?
    let removedCount = 0;
    let length = nums.length;

    // idea: if i remove, increment the removedcount, and check the index less the removedCount

    for (let i = 0; i < length; i++) {
        const num = nums[i - removedCount];
        if (num === val) {
            nums.splice(i - removedCount, 1)
            removedCount++;
        }
    }

    return nums.length

    // iterate through the list (unsorted)
        // if encounter the value
            // splice it from the list

};

console.log("start...")
assert.equal(removeElement([3,2,2,3], 3), 2);
assert.equal(removeElement([0,1,2,2,3,0,4,2], 2), 5);
console.log("done!")
/**
 * @param {number[]} nums
 * @return {number}
 */
 var singleNumber = function(nums) {
    if (nums.length === 1) {
        return nums[0];
    }
    let sorted = nums.sort()
    for (let i = 0; i < sorted.length; i+=2) {
        if (i === sorted.length - 1) {
            return sorted[i]
        }
        let first = sorted[i]
        let second = sorted[i+1]
        if (first !== second) {
            return first
        }
    }
};
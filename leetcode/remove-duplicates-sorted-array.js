var assert = require('assert')

var test = [1,1,2];
var test2 = [0,0,1,1,1,2,2,3,3,4];

var removeDuplicates = function(nums) {
    if (!nums.length) {
        return 0
    }
    if (nums.length === 1) {
        return 1;
    }

    let current;
    let numsCount = nums.length;
    let i = 0
    let removed = 0;
    while (i < numsCount) {
        printArray(nums)
        let number = nums[i - removed];
        if (current === number) {
            nums.splice(i - removed, 1)
            removed++;
        } else {
            current = number;
        }
        i++;
    }
    return nums.length;
}

var printArray = function(arr) {
    let str = ''
    for (let a in arr) {
        str += arr[a]
    }
    console.log(str)
}

assert(removeDuplicates(test) === 2)
assert(removeDuplicates(test2) === 5)
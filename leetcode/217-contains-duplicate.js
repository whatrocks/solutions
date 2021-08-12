var containsDuplicate = function(nums) {
    const cache = {}
    if (!nums.length) {
        return false
    }
    for (let i = 0; i < nums.length; i++) {
        if (cache[nums[i]]) {
            return true
        }
        cache[nums[i]] = true;
    }
    return false;
}

console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]))
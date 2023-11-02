/*
 *
 *input: nums[integer] and target[integer]
 output: indices of the two numbers that add up to the target

 each input has EXACTLY one solution
 you may not use the same element twice

 time: linear (is that possible)
 space: constant
 *
 */


function twoSum(nums, target) {

  // O(n2)
  /*for (let i = 0; i < nums.length; i++) {
    let x = nums[i]
    for (let j = i+1; j < nums.length; j++) {
      let current = x + nums[j];
      if (current === target) {
        return [i, j]
      }
    }
  }*/

  // O(n)
  // dict = {remainder: index of first }
  dict= {}
  for (let i = 0; i < nums.length; i++) {
    remainder = target - nums[i]
    dict[remainder] = i
  }
  for (let i = 0; i < nums.length; i++){
    current = nums[i]
    if (current in dict && dict[current] !== i) {
      return [i, dict[current]];
    }
  }

}

console.log("start")
console.log(twoSum([2,7,11,15], 9));
console.log(twoSum([3,2,4], 6));
console.log(twoSum([3,3], 6));
console.log(twoSum([2,5,5,11], 10));

console.log("end")

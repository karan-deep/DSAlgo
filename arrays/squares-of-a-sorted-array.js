// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

// Input: nums = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
// Explanation: After squaring, the array becomes [16,1,0,9,100].
// After sorting, it becomes [0,1,9,16,100].

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const sortedSquares = function (nums) {
  let left = 0,
    right = nums.length - 1,
    result = [];

  for (let i = nums.length - 1; i >= 0; i--) {
    if (Math.pow(nums[left], 2) > Math.pow(nums[right], 2))
      (result[i] = Math.pow(nums[left], 2)), left++;
    else (result[i] = Math.pow(nums[right], 2)), right--;
  }
  return result;
};

console.log(sortedSquares([-4, -1, 0, 3, 10]));

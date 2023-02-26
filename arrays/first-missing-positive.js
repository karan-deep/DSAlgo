// Given an unsorted integer array nums, return the smallest missing positive integer.

// You must implement an algorithm that runs in O(n) time and uses constant extra space.

// Input: nums = [1,2,0]
// Output: 3
// Explanation: The numbers in the range [1,2] are all in the array.

/**
 * @param {number[]} nums
 * @return {number}
 */
const firstMissingPositive = function (nums) {
  const obj = {};
  let currentPositiveNumber = 1;
  nums = nums.sort((a, b) => a - b);
  for (let index = 0; index < nums.length; index++) {
    if (!obj[nums[index]]) obj[nums[index]] = 1;
    else obj[nums[index]] += 1;
    // checking current index value is positive, not existed and not repeated
    if (nums[index] > 0 && !obj[currentPositiveNumber] && obj[nums[index]] == 1)
      return currentPositiveNumber;
    // otherwise iterating currentPositiveNumber
    if (nums[index] > 0 && obj[nums[index]] == 1) currentPositiveNumber++;
  }
  return currentPositiveNumber;
};

const firstMissingPositiveOptimized = function (nums) {
  let i = 0;
  // swap current index value with its in index belongs to
  // Example - 4 value swap with index (4-1=3)
  while (i < nums.length) {
    if (
      nums[i] > 0 &&
      nums[i] <= nums.length &&
      nums[nums[i] - 1] !== nums[i]
    ) {
      const temp = nums[nums[i] - 1];
      nums[nums[i] - 1] = nums[i];
      nums[i] = temp;
    } else {
      i++;
    }
  }
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] !== j + 1) {
      return j + 1;
    }
  }
  return nums.length + 1;
};

console.log(firstMissingPositive([1, 2, 0]));
console.log(firstMissingPositive([3, 4, -1, 1]));
console.log(firstMissingPositive([7, 8, 9, 11, 12]));
console.log(firstMissingPositive([0, 2, 2, 1, 1]));
console.log(firstMissingPositiveOptimized([3, 4, -1, 1]));

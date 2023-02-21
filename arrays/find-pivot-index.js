// Given an array of integers nums, calculate the pivot index of this array.

// The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.

// If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies to the right edge of the array.

// Return the leftmost pivot index. If no such index exists, return -1.

// Input: nums = [1,7,3,6,5,6]
// Output: 3
// Explanation:
// The pivot index is 3.
// Left sum = nums[0] + nums[1] + nums[2] = 1 + 7 + 3 = 11
// Right sum = nums[4] + nums[5] = 5 + 6 = 11

/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  let pivot = 0;
  while (pivot < nums.length) {
    const calculateSumResult = calculateSum(pivot, nums);
    if (calculateSumResult.right === calculateSumResult.left) {
      return pivot;
    }
    pivot++;
  }
  return -1;
};

function calculateSum(index, nums) {
  let right = 0,
    left = 0;
  //left
  for (let j = 0; j < index; j++) {
    right += nums[j];
  }
  //right
  for (let i = index + 1; i < nums.length; i++) {
    left += nums[i];
  }
  return {
    right,
    left,
  };
}

console.log(pivotIndex([1, 7, 3, 6, 5, 6]));

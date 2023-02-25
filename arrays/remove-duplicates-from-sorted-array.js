// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.

// Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.

// Input: nums = [1,1,2]
// Output: nums = [1,2]

/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function (nums) {
  let object = {};
  for (let index = 0; index < nums.length; index++) {
    if (nums[index] in object) {
      nums.splice(index, 1);
      index--;
    } else object[nums[index]] = 1;
  }
  return nums;
};

console.log(removeDuplicates([1, 1, 2]));

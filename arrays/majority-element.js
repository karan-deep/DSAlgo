// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

// Input: nums = [3,2,3]
// Output: 3

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let obj = {},
    index = 0,
    result = {
      key: nums[0],
      value: 1,
    };
  while (index < nums.length) {
    if (nums[index] in obj) obj[nums[index]] += 1;
    else obj[nums[index]] = 1;
    if (obj[nums[index]] > result.value) {
      result = {
        key: nums[index],
        value: obj[nums[index]],
      };
    }
    index++;
  }
  return result.key;
};

console.log(majorityElement([3, 2, 3]));

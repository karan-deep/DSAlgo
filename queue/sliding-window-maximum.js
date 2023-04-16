// You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position.

// Return the max sliding window.

// Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
// Output: [3,3,5,5,6,7]
// Explanation:
// Window position                Max
// ---------------               -----
// [1  3  -1] -3  5  3  6  7       3
//  1 [3  -1  -3] 5  3  6  7       3
//  1  3 [-1  -3  5] 3  6  7       5
//  1  3  -1 [-3  5  3] 6  7       5
//  1  3  -1  -3 [5  3  6] 7       6
//  1  3  -1  -3  5 [3  6  7]      7

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const maxSlidingWindowOptimized = function (nums, k) {
  const result = [];
  while (nums.length >= k) {
    let max = nums[0];
    for (let i = 0; i < k; i++) {
      if (max < nums[i]) max = nums[i];
    }
    result.push(max);
    nums.shift();
  }
  return result;
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const maxSlidingWindow = function (nums, k) {
  return recursionHelper([], nums, 0, k);
};

const recursionHelper = function (result, nums, startingIndex, k) {
  let max = nums[0];
  if (nums.length < k) return result;
  for (let i = startingIndex; i < k + startingIndex; i++) {
    if (max < nums[i]) max = nums[i];
  }
  result.push(max);
  nums.shift();
  return recursionHelper(result, nums, startingIndex, k);
};

console.log(maxSlidingWindowOptimized([1, 3, -1, -3, 5, 3, 6, 7], 3));

console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3));

console.log(maxSlidingWindow([1], 1));

console.log(maxSlidingWindow([1, -1], 1));

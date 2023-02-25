// Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
const merge = function (intervals) {
  let result = [];
  intervals.sort((a, b) => (a[0] !== b[0] ? a[0] - b[0] : a[1] - b[1]));
  for (let i = 0; i < intervals.length; i++) {
    result[i] = [];
    for (let j = 0; j < intervals[i].length; j++) {
      if (result[i - 1] && result[i - 1][1] >= intervals[i][0]) {
        if (intervals[i][j] >= result[i - 1][j] && j == 1)
          result[i - 1][j] = intervals[i][j];
      } else result[i][j] = intervals[i][j];
    }
    if (!result[i].length) {
      intervals.splice(i, 1);
      result.splice(i, 1);
      i--;
    }
  }
  return result;
};

console.log(
  merge([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ])
);

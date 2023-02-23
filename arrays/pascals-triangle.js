// Given an integer numRows, return the first numRows of Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

// Input: numRows = 5
// Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

/**
 * @param {number} numRows
 * @return {number[][]}
 */
const generate = function (numRows) {
  let result = [];
  for (let index = 0; index < numRows; index++) {
    let temp = helper(result[index - 1]);
    result.push(temp);
  }
  return result;
};

function helper(lastArray) {
  if (!lastArray) return [1];
  let helperArray = [];
  for (let index = 0; index < lastArray.length + 1; index++) {
    if (index == 0 || index == lastArray.length) helperArray.push(1);
    else helperArray.push(lastArray[index - 1] + lastArray[index]);
  }
  return helperArray;
}

console.log(generate(5));

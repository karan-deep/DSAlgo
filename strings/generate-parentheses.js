// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

// Input: n = 3
// Output: ["((()))","(()())","(())()","()(())","()()()"]

/**
 * @param {number} n
 * @return {string[]}
 */
const generateParenthesisBruteForce = function (n) {
  let result = ["()"];
  for (let outIndex = 1; outIndex < n; outIndex++) {
    let temp = [];
    while (result.length) {
      temp.push(result.pop());
    }
    for (const bracketString of temp) {
      for (
        let innerIndex = 0;
        innerIndex < bracketString.length;
        innerIndex++
      ) {
        result.push(
          bracketString.substring(0, innerIndex) +
            "()" +
            bracketString.substring(innerIndex)
        );
      }
    }
    result = Array.from(new Set(result));
  }
  return result;
};

/**
 * @param {number} n
 * @return {string[]}
 */
const generateParenthesisBacktracking = function (n) {
  const result = [];

  // Inner recursive function
  const recursiveHelper = (left, right, string) => {
    if (string.length === 2 * n) {
      result.push(string);
      return;
    }

    if (left < n) recursiveHelper(left + 1, right, string + "(");
    if (right < left) recursiveHelper(left, right + 1, string + ")");
  };

  recursiveHelper(0, 0, "");

  return result;
};

console.log(generateParenthesisBruteForce(2));

console.log(generateParenthesisBruteForce(3));

console.log(generateParenthesisBacktracking(2));

console.log(generateParenthesisBacktracking(3));

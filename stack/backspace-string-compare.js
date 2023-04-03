// Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.

// Note that after backspacing an empty text, the text will continue empty.

// Input: s = "ab#c", t = "ad#c"
// Output: true
// Explanation: Both s and t become "ac".

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const backspaceCompare = function (s, t) {
  function internalHelper(string) {
    let result = "";
    for (let index = 0; index < string.length; index++) {
      if (string[index] === "#") {
        result = result.slice(0, result.length - 1);
        continue;
      }
      result += string[index];
    }
    return result;
  }
  return internalHelper(s) === internalHelper(t);
};

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const backspaceCompareStack = function (s, t) {
  function internalHelper(string) {
    const result = [];
    for (let index = 0; index < string.length; index++) {
      if (string[index] === "#") {
        result.pop();
        continue;
      }
      result.push(string[index]);
    }
    return result.join();
  }
  return internalHelper(s) === internalHelper(t);
};

console.log(backspaceCompare("ab#c", "ad#c"));
console.log(backspaceCompareStack("ab#c", "ad#c"));

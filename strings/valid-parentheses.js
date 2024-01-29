// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "(]"
// Output: false

// Explanation - Use stack : last opening bracket must be closed subsequently else not valid

/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function (s) {
  if (s.length % 2 !== 0) return false;
  const bracketsPair = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  const stack = [];
  for (const bracket of s) {
    if (bracketsPair[bracket]) {
      stack.push(bracket);
      continue;
    } else if (
      (bracket === ")" && stack.pop() !== "(") ||
      (bracket === "}" && stack.pop() !== "{") ||
      (bracket === "]" && stack.pop() !== "[")
    )
      return false;
  }
  return !stack.length;
};

console.log(isValid("(("));

console.log(isValid("(())"));

console.log(isValid("([(]"));

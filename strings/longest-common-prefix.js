// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Input: strs = ["flower","flow","flight"]
// Output: "fl"

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

const longestCommonPrefixOptimized = function (strs) {
  let longestCommonPrefix = "";

  if (strs == null || strs.length == 0) {
    return longestCommonPrefix;
  }

  // Find the minimum length string from the array
  let minimumLength = strs[0].length;
  for (let i = 1; i < strs.length; i++) {
    minimumLength = Math.min(minimumLength, strs[i].length);
  }

  for (let i = 0; i < minimumLength; i++) {
    let current = strs[0][i];
    for (let j = 0; j < strs.length; j++) {
      if (strs[j][i] != current) {
        return longestCommonPrefix;
      }
    }
    longestCommonPrefix += current;
  }

  return longestCommonPrefix;
};

/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function (strs) {
  let result = "",
    substringLength = 1;

  if (!strs || !strs.length) return result;
  if (strs.length === 1) return strs[0];

  while (strs[0].length && substringLength <= strs[0].length) {
    let found = 1;
    for (let index = 1; index < strs.length; index++) {
      if (
        strs[0].substring(0, substringLength) ===
        strs[index].substring(0, substringLength)
      )
        found++;
      if (found === strs.length) result = strs[0].substring(0, substringLength);
    }
    substringLength++;
  }
  return result;
};

console.log(longestCommonPrefixOptimized(["flower", "flow", "flight"]));

console.log(longestCommonPrefix(["flower", "flow", "flight"]));

console.log(longestCommonPrefix(["dog", "racecar", "car"]));

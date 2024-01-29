// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

// Example 1:

// Input: haystack = "sadbutsad", needle = "sad"
// Output: 0
// Explanation: "sad" occurs at index 0 and 6.
// The first occurrence is at index 0, so we return 0.

// Logic Explanation - Implementation of string indexOf : two loops one for outer word and one for inner word

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const strStr = function (haystack, needle) {
  let referenceIndex = 0;
  while (referenceIndex !== haystack.length) {
    let innerWord = "",
      outerWord = "";
    for (let index = 0; index < needle.length; index++) {
      if (index + referenceIndex > haystack.length) return -1;
      innerWord += needle[index];
      outerWord += haystack[index + referenceIndex];
    }
    if (innerWord === outerWord) return referenceIndex;
    referenceIndex++;
  }
  return -1;
};

console.log(strStr("sadbutsad", "sad"));

console.log(strStr("a", "a"));

console.log(strStr("leetcode", "leeto"));

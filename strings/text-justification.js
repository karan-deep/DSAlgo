// Given an words of strings words and a width maxWidth, format the text such that each line has exactly maxWidth characters and is fully (left and right) justified.

// You should pack your words in a greedy approach; that is, pack as many words as you can in each line. Pad extra spaces ' ' when necessary so that each line has exactly maxWidth characters.

// Extra spaces between words should be distributed as evenly as possible. If the number of spaces on a line does not divide evenly between words, the empty slots on the left will be assigned more spaces than the slots on the right.

// For the last line of text, it should be left-justified, and no extra space is inserted between words.

// Note:

// A word is defined as a character sequence consisting of non-space characters only.
// Each word's length is guaranteed to be greater than 0 and not exceed maxWidth.
// The input words words contains at least one word.

// Example 1:

// Input: words = ["This", "is", "an", "example", "of", "text", "justification."], maxWidth = 16
// Output:
// [
//    "This    is    an",
//    "example  of text",
//    "justification.  "
// ]
// Example 2:

// Input: words = ["What","must","be","acknowledgment","shall","be"], maxWidth = 16
// Output:
// [
//   "What   must   be",
//   "acknowledgment  ",
//   "shall be        "
// ]
// Explanation: Note that the last line is "shall be    " instead of "shall     be", because the last line must be left-justified instead of fully-justified.
// Note that the second line is also left-justified because it contains only one word.

// Logic Explanation - First find words that can fit max to the width given
// Then find how many spaces are spare which can be added and add
// subsequently except last word in the line
// For the last line, add spaces from the last word only

/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
const fullJustify = function (words, maxWidth) {
  const result = [];
  let justifyWord = "";
  for (let index = 0; index < words.length; index++) {
    if ((justifyWord + words[index]).length >= maxWidth) {
      result.push(justifyWord);
      justifyWord = "";
    }
    if (justifyWord) justifyWord = justifyWord + " " + words[index];
    else justifyWord = words[index];
  }
  if (justifyWord) result.push(justifyWord);

  let resultString = [];
  for (let index = 0; index < result.length; index++) {
    if (result[index]) {
      const countWords = result[index].split(" ");
      const countJustification =
        maxWidth - result[index].replaceAll(" ", "").length;
      let addSpace = 0;
      for (let j = 0; j < countJustification; j++) {
        if (addSpace > countWords.length - 2) {
          if (index === result.length - 1) addSpace = countWords.length - 1;
          else addSpace = 0;
        }
        countWords[addSpace] += " ";
        addSpace++;
      }
      resultString.push(countWords.join(""));
    }
  }
  return resultString;
};

console.log(
  fullJustify(
    ["This", "is", "an", "example", "of", "text", "justification."],
    16
  )
);

console.log(
  fullJustify(["Listen", "to", "many,", "speak", "to", "a", "few."], 6)
);

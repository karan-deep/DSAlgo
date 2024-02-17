// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:

// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
// Example 2:

// Input: strs = [""]
// Output: [[""]]

// Logic Explanation - Sort alphabets of the word, words = anagrams when their
// alphabets are same

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagramsOptimized = function (strs) {
  const words = {};
  for (const element of strs) {
    let sortedAlphabets = Array.from(element).sort();
    sortedAlphabets = sortedAlphabets.join();
    if (words[sortedAlphabets]) words[sortedAlphabets].push(element);
    else words[sortedAlphabets] = [element];
  }
  return Object.values(words);
};

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = function (strs) {
  const result = [];
  for (let index = 0; index < strs.length; index++) {
    result[index] = [];
    for (let j = index + 1; j < strs.length; j++) {
      let tempWord = strs[index];
      if (tempWord && strs[j].length === strs[index].length)
        for (const alphabet of strs[j]) {
          let foundAlph = strs[index].includes(alphabet);
          if (foundAlph) tempWord = tempWord.replace(alphabet, "");
        }
      if (strs[index] === strs[j] || (strs[index] && !tempWord))
        result[index].push(strs[j]), strs.splice(j, 1), j--;
    }
    result[result.length - 1].push(strs[index]);
  }
  return result;
};

console.log(groupAnagramsOptimized(["eat", "tea", "tan", "ate", "nat", "bat"]));

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));

console.log(groupAnagrams([""]));

console.log(groupAnagramsOptimized(["", "", ""]));

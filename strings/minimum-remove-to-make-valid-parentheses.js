// Given a string s of '(' , ')' and lowercase English characters.

// Your task is to remove the minimum number of parentheses ( '(' or ')', in any positions ) so that the resulting parentheses string is valid and return any valid string.

// Formally, a parentheses string is valid if and only if:

// It is the empty string, contains only lowercase characters, or
// It can be written as AB (A concatenated with B), where A and B are valid strings, or
// It can be written as (A), where A is a valid string.

// Input: s = "lee(t(c)o)de)"
// Output: "lee(t(c)o)de"
// Explanation: "lee(t(co)de)" , "lee(t(c)ode)" would also be accepted.

/**
 * @param {string} s
 * @return {string}
 */
const minRemoveToMakeValidOptimized = function (s) {
  s = s.split("");
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") stack.push(i);
    else if (s[i] === ")") {
      if (stack.length) stack.pop();
      else s[i] = "";
    }
  }

  for (let i of stack) s[i] = "";

  return s.join("");
};

const minRemoveToMakeValid = function (s) {
  let myMap = new Map();
  for (let index = 0; index < s.length; index++) {
    if (["(", ")"].includes(s[index]))
      if (!myMap.has(s[index])) myMap.set(s[index], [index]);
      else myMap.get(s[index]).push(index);
  }

  const openBracket = myMap.get("(");
  const endBracket = myMap.get(")");
  let index = 0,
    array = [];

  while (index < (openBracket || []).length && (endBracket || []).length) {
    let found = -1;
    if (endBracket)
      found = endBracket.findIndex((el) => el > openBracket[index]);
    if (found !== -1) {
      array.push(openBracket[index], endBracket[found]);
      endBracket.splice(found, 1);
    }
    index++;
  }

  let result = "";

  for (let indexToAdd = 0; indexToAdd < s.length; indexToAdd++) {
    if (["(", ")"].includes(s[indexToAdd]) && !array.includes(indexToAdd))
      result += "";
    else result += s[indexToAdd];
  }

  return result;
};

console.log(minRemoveToMakeValid("lee(t(c)o)de)"));

console.log(minRemoveToMakeValid("a)b(c)d"));

console.log(minRemoveToMakeValid("(a(b(c)d)"));

console.log(minRemoveToMakeValidOptimized("lee(t(c)o)de)"));

console.log(minRemoveToMakeValidOptimized("a)b(c)d"));

console.log(minRemoveToMakeValidOptimized("(a(b(c)d)"));

console.log(minRemoveToMakeValid(")))sadf"));

const { Stack } = require("./stack");

// Write a program to reverse a stack using recursion, without using any loop.

// Input: elements present in stack from top to bottom 1 2 3 4
// Output: 4 3 2 1

// Input: elements present in stack from top to bottom 1 2 3
// Output: 3 2 1

const reverseStack = function (stack) {
  const resultStack = new Stack();

  function recursionHelper(node) {
    if (!node) return resultStack;
    resultStack.push(node.val);
    stack.pop();
    return recursionHelper(stack.last);
  }
  return recursionHelper(stack.last);
};

let stack = new Stack();
stack.push("First");
stack.push("Second");
stack.push("Third");

console.log(reverseStack(stack));

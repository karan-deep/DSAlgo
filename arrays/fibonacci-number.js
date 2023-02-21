// The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

// F(0) = 0, F(1) = 1
// F(n) = F(n - 1) + F(n - 2), for n > 1.
// Given n, calculate F(n).

// Input: n = 2
// Output: 1
// Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.

/**
 * @param {number} n
 * @return {number}
 */
function fib(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return fibHelper(n - 1) + fibHelper(n - 2);
}

function fibHelper(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  let result = 0,
    previous2 = 0,
    previous1 = 1;
  for (let index = 2; index <= n; index++) {
    result = previous2 + previous1;
    previous2 = previous1;
    previous1 = result;
  }
  return result;
}

console.log(fib(12));

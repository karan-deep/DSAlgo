const { BinaryTree } = require("./binary-tree");

// Given an integer n, return the number of structurally unique BST's (binary search trees) which has exactly n nodes of unique values from 1 to n.

// Input: n = 3
// Output: 5

// Explanation - Depends on the total numbers not the values of it. For example -> 1,2 Unique BST = 4,5 Unique BST.
// Have to find Unique BST sequentially and keep sum of it. Pattern -> Catalan numbers

/*		
		1					2				3
		/\					/\				/\
	(0)	  2,3(2)		1(1)  3(1)		1,2(2) (0) 
	C0 * C(2)	  +		C(1) * C(1)	 +	C(2) * C(1)
*/

/**
 * @param {number} n
 * @return {number}
 */
const numTrees = function (n) {
  const resultUnique = new Array(n + 1).fill(0);
  resultUnique[0] = resultUnique[1] = 1;
  resultUnique[2] = 2;
  for (let i = 3; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      resultUnique[i] += resultUnique[j] * resultUnique[i - j - 1];
    }
  }
  return resultUnique[n];
};

console.log(numTrees(3));

console.log(numTrees(2));

const { BinaryTree } = require("./binary-tree");

// A path in a binary tree is a sequence of nodes where each pair of adjacent nodes in the sequence has an edge connecting them. A node can only appear in the sequence at most once. Note that the path does not need to pass through the root.

// The path sum of a path is the sum of the node's values in the path.

// Given the root of a binary tree, return the maximum path sum of any non-empty path.

// Example 1:

// Input: root = [1,2,3]
// Output: 6
// Explanation: The optimal path is 2 -> 1 -> 3 with a path sum of 2 + 1 + 3 = 6.

// Example 2:

// Input: root = [-10,9,20,null,null,15,7]
// Output: 42
// Explanation: The optimal path is 15 -> 20 -> 7 with a path sum of 15 + 20 + 7 = 42.

// Logic Explanation -
// 1. First check maximum sum of either left or right path by partitioning them(Can be used to find max path sum from root)
// 2. Update result if greater than existing - Like updating root from partition starts. Else keep moving upwards

/**
 * @param {TreeNode} root
 * @return {number}
 */
const maxPathSum = function (root) {
  let result = -Infinity;
  function recursive(root, maxSum) {
    if (!root) return 0;
    const leftSum = Math.max(recursive(root.left, maxSum), 0);
    const rightSum = Math.max(recursive(root.right, maxSum), 0);
    result = Math.max(result, root.val + leftSum + rightSum);
    return root.val + Math.max(leftSum, rightSum);
  }
  recursive(root, 0);
  return result;
};

const binaryTree = new BinaryTree();
binaryTree.insert(-10);
binaryTree.insert(9);
binaryTree.insert(20);
binaryTree.insert(null);
binaryTree.insert(null);
binaryTree.insert(15);
binaryTree.insert(7);
binaryTree.removeNullNode();

console.log(maxPathSum(binaryTree.root));

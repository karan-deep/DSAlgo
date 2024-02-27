const { BinaryTree } = require("./binary-tree");

// Given the root of a binary tree, return its maximum depth.

// A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

// Input: root = [3,4,5,-7,-6,null,null,-7,null,-5,null,null,null,-4]
// Output: 5

/**
 * @param {TreeNode} root
 * @return {number}
 */
const maxDepth = function (root) {
  if (!root) return 0;
  let left = maxDepth(root.left);
  let right = maxDepth(root.right);
  return 1 + Math.max(left, right);
};

const binaryTree = new BinaryTree();
binaryTree.insert(3);
binaryTree.insert(4);
binaryTree.insert(5);
binaryTree.insert(-7);
binaryTree.insert(-6);
binaryTree.insert(null);
binaryTree.insert(null);
binaryTree.insert(-7);
binaryTree.insert(null);
binaryTree.insert(-5);
binaryTree.insert(null);
binaryTree.insert(null);
binaryTree.insert(null);
binaryTree.insert(-4);

console.log(maxDepth(binaryTree.root));

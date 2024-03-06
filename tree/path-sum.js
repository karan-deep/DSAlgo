const { BinaryTree } = require("./binary-tree");

// Given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum.

// A leaf is a node with no children.

// Input: root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22
// Output: true
// Explanation: The root-to-leaf path with the target sum is shown.

/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
const hasPathSum = function (root, targetSum) {
  let result = false;
  function recursive(root, sum) {
    if (result) return;
    if (!root) return;
    if (root.left === null && root.right === null && sum === targetSum)
      result = true;
    if (root.left) recursive(root.left, sum + root.left.val);
    if (root.right) recursive(root.right, sum + root.right.val);
  }
  if (root) recursive(root, root.val);
  return result;
};

const binaryTree = new BinaryTree();
binaryTree.insert(5);
binaryTree.insert(4);
binaryTree.insert(8);
binaryTree.insert(11);
binaryTree.insert(null);
binaryTree.insert(13);
binaryTree.insert(4);
binaryTree.insert(7);
binaryTree.insert(2);
binaryTree.insert(null);
binaryTree.insert(null);
binaryTree.insert(null);
binaryTree.insert(1);
binaryTree.removeNullNode();

console.log(hasPathSum(binaryTree.root, 22));

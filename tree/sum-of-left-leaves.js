const { BinaryTree } = require("./binary-tree");

// Given the root of a binary tree, return the sum of all left leaves.

// A leaf is a node with no children. A left leaf is a leaf that is the left child of another node.

// Input: root = [3,9,20,null,null,15,7]
// Output: 24
// Explanation: There are two left leaves in the binary tree, with values 9 and 15 respectively.
// Example 2:

// Input: root = [1]
// Output: 0

/**
 * @param {TreeNode} root
 * @return {number}
 */
const sumOfLeftLeaves = function (root) {
  let result = 0;
  function recursive(root) {
    if (!root || !Number.isInteger(root.val)) return;
    if (root.left !== null)
      if (root.left.left === null && root.left.right === null)
        result += root.left.val;
    if (root.left) recursive(root.left, true);
    if (root.right) recursive(root.right, false);
  }
  recursive(root, false);
  return result;
};

const binaryTree = new BinaryTree();
binaryTree.insert(3);
binaryTree.insert(9);
binaryTree.insert(20);
binaryTree.insert(null);
binaryTree.insert(null);
binaryTree.insert(15);
binaryTree.insert(7);
binaryTree.removeNullNode();

console.log(sumOfLeftLeaves(binaryTree.root));

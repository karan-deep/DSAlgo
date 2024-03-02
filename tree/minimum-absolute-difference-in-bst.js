const { BinarySearchTree } = require("./binary-tree");

// Given the root of a Binary Search Tree (BST), return the minimum absolute difference between the values of any two different nodes in the tree.

// Input: root = [4,2,6,1,3]
// Output: 1

// Logic Explanation - Use DFS inorder to go in sort order and
// check the difference between current and previous node value

/**
 * @param {TreeNode} root
 * @return {number}
 */
const getMinimumDifference = function (root) {
  let lowestDiff = Infinity;
  let previousValue = -Infinity;
  function recursive(root) {
    if (!root || !Number.isInteger(root.val)) return;
    if (root.left) recursive(root.left);
    lowestDiff = Math.min(lowestDiff, root.val - previousValue);
    previousValue = root.val;
    if (root.right) recursive(root.right);
  }
  recursive(root);
  return lowestDiff;
};

const binarySearchTree = new BinarySearchTree();
binarySearchTree.insert(4);
binarySearchTree.insert(2);
binarySearchTree.insert(6);
binarySearchTree.insert(1);
binarySearchTree.insert(3);

const binarySearchTree1 = new BinarySearchTree();
binarySearchTree1.insert(1);
binarySearchTree1.insert(0);
binarySearchTree1.insert(48);
binarySearchTree1.insert(null);
binarySearchTree1.insert(null);
binarySearchTree1.insert(12);
binarySearchTree1.insert(49);

console.log(getMinimumDifference(binarySearchTree.root));
console.log(getMinimumDifference(binarySearchTree1.root));

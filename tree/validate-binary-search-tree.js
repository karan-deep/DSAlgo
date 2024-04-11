const { BinaryTree } = require("./binary-tree");

// Given the root of a binary tree, determine if it is a valid binary search tree (BST).

// A valid BST is defined as follows:

// The left subtree of a node contains only nodes with keys less than the node's key.
// The right subtree of a node contains only nodes with keys greater than the node's key.
// Both the left and right subtrees must also be binary search trees.

// Input: root = [2,1,3]
// Output: true

// Explanation - Check whether the value comes between the range, min < value < max

const isValidBST = function (root, minimum = -Infinity, maximum = Infinity) {
  if (root == null) return true;
  if (root.val <= minimum || root.val >= maximum) return false;
  return (
    isValidBST(root.left, minimum, root.val) &&
    isValidBST(root.right, root.val, maximum)
  );
};

const binaryTree = new BinaryTree();
binaryTree.insert(2);
binaryTree.insert(1);
binaryTree.insert(3);

const binaryTree1 = new BinaryTree();
binaryTree1.insert(5);
binaryTree1.insert(1);
binaryTree1.insert(4);
binaryTree1.insert(null);
binaryTree1.insert(null);
binaryTree1.insert(3);
binaryTree1.insert(6);

console.log(isValidBST(binaryTree.root));

console.log(isValidBST(binaryTree1.root));

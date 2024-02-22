const { BinarySearchTree } = require("./binary-tree");

// Given the root of a binary tree, invert the tree, and return its root.

// Input: root = [4,2,7,1,3,6,9]
// Output: [4,7,2,9,6,3,1]

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
const invertTree = function (root) {
  let current = root;
  if (!current) return current;
  invertTree(current.left);
  invertTree(current.right);
  const temp = current.right;
  current.right = current.left;
  current.left = temp;
  return root;
};

const binarySearchTree = new BinarySearchTree();
binarySearchTree.insert(4);
binarySearchTree.insert(7);
binarySearchTree.insert(2);
binarySearchTree.insert(9);
binarySearchTree.insert(6);
binarySearchTree.insert(3);
binarySearchTree.insert(1);

invertTree(binarySearchTree.root);

console.log(binarySearchTree.bfs());

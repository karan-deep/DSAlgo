const { BinaryTree } = require("./binary-tree");

// Given the roots of two binary trees p and q, write a function to check if they are the same or not.

// Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

// Input: p = [1,2,3], q = [1,2,3]
// Output: true

/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
const isSameTree = function (p, q) {
  if (!p && !q) return true;
  if (!p || !q || p.val != q.val) return false;
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

const binaryTree = new BinaryTree();
binaryTree.insert(2);
binaryTree.insert(null);
binaryTree.insert(4);

const binaryTree1 = new BinaryTree();
binaryTree1.insert(2);
binaryTree1.insert(3);
binaryTree1.insert(4);

console.log(isSameTree(binaryTree.root, binaryTree1.root));

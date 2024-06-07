const { BinarySearchTree } = require("./binary-tree");

// Given the root of a binary search tree, and an integer k, return the kth smallest value (1-indexed) of all the values of the nodes in the tree.

// Input: root = [3,1,4,null,2], k = 1
// Output: 1

/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
const kthSmallest = function (root, k) {
  const sortedArray = [];
  function helper(root, k) {
    if (root.left) helper(root.left, k);
    sortedArray.push(root.val);
    if (root.right) helper(root.right, k);
  }
  helper(root, k);
  return sortedArray[k - 1];
};

const binarySearchTree = new BinarySearchTree();
binarySearchTree.insert(3);
binarySearchTree.insert(1);
binarySearchTree.insert(4);
binarySearchTree.insert(2);

console.log(kthSmallest(binarySearchTree.root, 1));

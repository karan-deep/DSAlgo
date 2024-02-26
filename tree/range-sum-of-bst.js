const { BinarySearchTree } = require("./binary-tree");

// Given the root node of a binary search tree and two integers low and high, return the sum of values of all nodes with a value in the inclusive range [low, high].

// Input: root = [10,5,15,3,7,null,18], low = 7, high = 15
// Output: 32
// Explanation: Nodes 7, 10, and 15 are in the range [7, 15]. 7 + 10 + 15 = 32.

// Logic Explanation - Use DFS preorder to go recursively over the nodes and only call if child nodes
// follows the comparison given with current node value

/**
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
const rangeSumBST = function (root, low, high) {
  let sum = 0;

  function DFSPreorder(current) {
    if (current.val >= low && current.val <= high) sum += current.val;
    if (current.left && current.val > low) DFSPreorder(current.left);
    if (current.right && current.val < high) DFSPreorder(current.right);
  }

  if (root) DFSPreorder(root);

  return sum;
};

const binarySearchTree = new BinarySearchTree();
binarySearchTree.insert(10);
binarySearchTree.insert(5);
binarySearchTree.insert(15);
binarySearchTree.insert(3);
binarySearchTree.insert(7);
binarySearchTree.insert(null);
binarySearchTree.insert(18);

console.log(rangeSumBST(binarySearchTree.root, 7, 15));

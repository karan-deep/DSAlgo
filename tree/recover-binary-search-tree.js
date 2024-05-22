const { BinaryTree } = require("./binary-tree");

// You are given the root of a binary search tree (BST), where the values of exactly two nodes of the tree were swapped by mistake. Recover the tree without changing its structure.

// Input: root = [1,3,null,null,2]
// Output: [3,1,null,null,2]

/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
const recoverTree = function (root) {
  function helper(
    root,
    minimum = { val: -Infinity },
    maximum = { val: Infinity }
  ) {
    if (root == null) return true;
    if (root.val <= minimum.val) return swapValues(root, minimum);
    if (root.val >= maximum.val) return swapValues(root, maximum);
    return (
      helper(root.left, minimum, root) && helper(root.right, root, maximum)
    );
  }
  while (true) {
    if (helper(root)) break;
  }
};

function swapValues(source, destination) {
  [source.val, destination.val] = [destination.val, source.val];
}

const binaryTree = new BinaryTree();
binaryTree.insert(1);
binaryTree.insert(3);
binaryTree.insert(null);
binaryTree.insert(null);
binaryTree.insert(2);
binaryTree.removeNullNode();

console.log(recoverTree(binaryTree.root));

console.log(binaryTree.root);

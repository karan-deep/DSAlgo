const { BinaryTree } = require("./binary-tree");

// Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

// Input: root = [1,2,2,3,4,4,3]
// Output: true

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const isSymmetric = function (root) {
  if (!root) return true;
  let result = true;
  function checkSymmetric(left, right) {
    if (!result) return;
    if (!left && !right) return;
    if (!left || !right) return (result = false);
    if (left.val !== right.val) return (result = false);
    if (left.left || right.right) checkSymmetric(left.left, right.right);
    if (left.right || right.left) checkSymmetric(left.right, right.left);
  }
  checkSymmetric(root.left, root.right);
  return result;
};

const binaryTree = new BinaryTree();
binaryTree.insert(2);
binaryTree.insert(3);
binaryTree.insert(3);
binaryTree.insert(4);
binaryTree.insert(5);
binaryTree.insert(5);
binaryTree.insert(4);
binaryTree.insert(5);
binaryTree.insert(4);
binaryTree.insert(5);
binaryTree.insert(4);
binaryTree.insert(4);
binaryTree.insert(5);
binaryTree.insert(4);
binaryTree.insert(5);
binaryTree.removeNullNode();

console.log(isSymmetric(binaryTree.root));

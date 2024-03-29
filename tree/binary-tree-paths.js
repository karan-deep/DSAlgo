const { BinaryTree } = require("./binary-tree");

// Given the root of a binary tree, return all root-to-leaf paths in any order.

// A leaf is a node with no children.

// Input: root = [1,2,3,null,5]
// Output: ["1->2->5","1->3"]

/**
 * @param {TreeNode} root
 * @return {string[]}
 */
const binaryTreePaths = function (root) {
  const result = [];
  function helper(root, link) {
    if (!root) return;
    link += `${root.val}->`;
    if (!root.left && !root.right)
      return result.push(link.substring(0, link.length - 2));
    if (root.left) helper(root.left, link);
    if (root.right) helper(root.right, link);
  }
  helper(root, "");
  return result;
};

const binaryTree = new BinaryTree();
binaryTree.insert(1);
binaryTree.insert(2);
binaryTree.insert(3);
binaryTree.insert(null);
binaryTree.insert(5);
binaryTree.removeNullNode();

console.log(binaryTreePaths(binaryTree.root));

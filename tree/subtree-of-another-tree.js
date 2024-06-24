const { BinaryTree } = require("./binary-tree");

// Given the roots of two binary trees root and subRoot, return true if there is a subtree of root with the same structure and node values of subRoot and false otherwise.

// A subtree of a binary tree tree is a tree that consists of a node in tree and all of this node's descendants. The tree tree could also be considered as a subtree of itself.

// Logic explanation : Compare subtree with every node(as starting point) of the root tree until you find

/**
 * @param {TreeNode} root
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
const isSubtree = function (root, subRoot) {
  function isEqual(root, subRoot) {
    if (!root && !subRoot) return true;
    if (!root || !subRoot || root.val !== subRoot.val) return false;
    return (
      isEqual(root.left, subRoot.left) && isEqual(root.right, subRoot.right)
    );
  }
  if (!subRoot) return true;
  if (!root) return false;

  if (isEqual(root, subRoot)) return true;

  return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};

const binaryTree = new BinaryTree();
binaryTree.insert(1);
binaryTree.insert(null);
binaryTree.insert(1);
binaryTree.insert(null);
binaryTree.insert(1);
binaryTree.insert(null);
binaryTree.insert(1);
binaryTree.insert(null);
binaryTree.insert(1);
binaryTree.insert(null);
binaryTree.insert(1);
binaryTree.insert(null);
binaryTree.insert(1);
binaryTree.insert(null);
binaryTree.insert(1);
binaryTree.insert(null);
binaryTree.insert(1);
binaryTree.insert(null);
binaryTree.insert(1);
binaryTree.insert(null);
binaryTree.insert(1);
binaryTree.insert(2);
binaryTree.removeNullNode();

const binaryTree1 = new BinaryTree();
binaryTree1.insert(1);
binaryTree1.insert(null);
binaryTree1.insert(1);
binaryTree1.insert(null);
binaryTree1.insert(1);
binaryTree1.insert(null);
binaryTree1.insert(1);
binaryTree1.insert(null);
binaryTree1.insert(1);
binaryTree1.insert(null);
binaryTree1.insert(1);
binaryTree1.insert(2);
binaryTree1.removeNullNode();

console.log(isSubtree(binaryTree.root, binaryTree1.root));

const { BinaryTree } = require("./binary-tree");

// You are given two binary trees root1 and root2.

// Imagine that when you put one of them to cover the other, some nodes of the two trees are overlapped while the others are not. You need to merge the two trees into a new binary tree. The merge rule is that if two nodes overlap, then sum node values up as the new value of the merged node. Otherwise, the NOT null node will be used as the node of the new tree.

// Return the merged tree.

// Note: The merging process must start from the root nodes of both trees.

// Input: root1 = [1,3,2,5], root2 = [2,1,3,null,4,null,7]
// Output: [3,4,5,5,4,null,7]

/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
const mergeTrees = function (root1, root2) {
  function mergeDFS(r1, r2) {
    if (!r1 || !r2) return;
    if (!r1.val || !r2.val) r2.val = !r1.val ? r2.val : r1.val;
    else if (r1.val && r2.val) r2.val = r2.val + r1.val;
    if (r1.left || r2.left) mergeDFS(r1.left, r2.left);
    if (r1.right || r2.right) mergeDFS(r1.right, r2.right);
  }

  mergeDFS(root1, root2);

  return root2;
};

const binaryTree = new BinaryTree();
binaryTree.insert(1);
binaryTree.insert(3);
binaryTree.insert(2);
binaryTree.insert(5);

const binaryTree1 = new BinaryTree();
binaryTree1.insert(2);
binaryTree1.insert(1);
binaryTree1.insert(3);
binaryTree1.insert(null);
binaryTree1.insert(4);
binaryTree1.insert(null);
binaryTree1.insert(7);

console.log(mergeTrees(binaryTree.root, binaryTree1.root));

console.log(binaryTree1.root);
console.log(binaryTree1.bfs());

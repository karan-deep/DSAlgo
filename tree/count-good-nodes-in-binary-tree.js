const { BinaryTree } = require("./binary-tree");

// Given a binary tree root, a node X in the tree is named good if in the path from root to X there are no nodes with a value greater than X.

// Return the number of good nodes in the binary tree.

// Example 1:

// Input: root = [3,1,4,3,null,1,5]
// Output: 4
// Explanation: Nodes in blue are good.
// Root Node (3) is always a good node.
// Node 4 -> (3,4) is the maximum value in the path starting from the root.
// Node 5 -> (3,4,5) is the maximum value in the path
// Node 3 -> (3,1,3) is the maximum value in the path.

// Example 2:
// Input: root = [1]
// Output: 1
// Explanation: Root is considered as good.

// Logic Explanation - Increment the counter and update the number for maximum number in the particular path to compare

/**
 * @param {TreeNode} root
 * @return {number}
 */
const goodNodes = function (root) {
  let result = 0;
  function helperRecursive(root, maxInPath) {
    if (root.val >= maxInPath) {
      result++;
      maxInPath = root.val;
    }
    if (root.left) helperRecursive(root.left, maxInPath);
    if (root.right) helperRecursive(root.right, maxInPath);
  }
  helperRecursive(root, root.val);
  return result;
};

const binaryTree = new BinaryTree();
binaryTree.insert(3);
binaryTree.insert(1);
binaryTree.insert(4);
binaryTree.insert(3);
binaryTree.insert(null);
binaryTree.insert(1);
binaryTree.insert(5);
binaryTree.removeNullNode();

const binaryTree1 = new BinaryTree();
binaryTree1.insert(2);
binaryTree1.insert(null);
binaryTree1.insert(4);
binaryTree1.insert(10);
binaryTree1.insert(8);
binaryTree1.insert(null);
binaryTree1.insert(null);
binaryTree1.insert(4);
binaryTree1.removeNullNode();

// console.log(goodNodes(binaryTree.root));
console.log(goodNodes(binaryTree1.root));

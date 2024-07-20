const { BinaryTree } = require("./binary-tree");

// You are given the root of a binary tree. We install cameras on the tree nodes where each camera at a node can monitor its parent, itself, and its immediate children.

// Return the minimum number of cameras needed to monitor all nodes of the tree.

// Example 1:
// Input: root = [0,0,null,0,0]
// Output: 1
// Explanation: One camera is enough to monitor all nodes if placed as shown.

// Example 2:
// Input: root = [0,0,null,0,null,0,null,null,0]
// Output: 2
// Explanation: At least two cameras are needed to monitor all nodes of the tree. The above image shows one of the valid configurations of camera placement

// Logic Explanation - Go with Post-order as would able to compare both childs. There can be 3 state : Camera needed, already covered or installed on the particular node.
// If both child covered - means parent(root) needs a camera
// If any of the child needs a camera - means parent(root) installs a camera
// If any of the child has a camera - means parent(root) is already covered

/**
 * @param {TreeNode} root
 * @return {number}
 */
const minCameraCover = function (root) {
  let cameraCount = 0;
  function helper(root) {
    if (!root) return "NEED";
    let left = "COVERED",
      right = "COVERED";
    if (root.left) left = helper(root.left);
    if (root.right) right = helper(root.right);
    if (left === "NEED" || right === "NEED") {
      cameraCount++;
      return "INSTALLED";
    }
    if (left === "INSTALLED" || right === "INSTALLED") return "COVERED";
    return "NEED";
  }
  if (helper(root) === "NEED") cameraCount++;
  return cameraCount;
};

const binaryTree = new BinaryTree();
binaryTree.insert(1);
binaryTree.insert(2);
binaryTree.insert(null);
binaryTree.insert(3);
binaryTree.insert(null);
binaryTree.insert(3);
binaryTree.insert(null);
binaryTree.insert(null);
binaryTree.insert(5);
binaryTree.removeNullNode();

console.log(minCameraCover(binaryTree.root));

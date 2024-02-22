class Node {
  constructor(val) {
    this.val = val;
    this.right = null;
    this.left = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    let newNode = new Node(val);
    if (!this.root) return (this.root = newNode);
    let queue = [this.root];
    while (queue.length) {
      let current = queue.shift();
      if (current.val) {
        if (!current.left) return (current.left = newNode);
        else queue.push(current.left);
        if (!current.right) return (current.right = newNode);
        else queue.push(current.right);
      }
    }
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
    this.data = [];
  }

  insert(val) {
    let newNode = new Node(val);
    if (!this.root) return (this.root = newNode);
    let current = this.root;
    while (true) {
      if (val === current.val) return;
      if (val < current.val) {
        if (!current.left) return (current.left = newNode);
        current = current.left;
      } else {
        if (!current.right) return (current.right = newNode);
        current = current.right;
      }
    }
  }

  bfs() {
    let current = this.root,
      data = [],
      queue = [];
    queue.push(current);
    while (queue.length) {
      current = queue.shift();
      data.push(current.val);
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
    return data;
  }

  dfsPreorder(root) {
    this.data.push(root.val);
    if (root.left) this.dfsPreorder(root.left);
    if (root.right) this.dfsPreorder(root.right);
    return this.data;
  }

  dfsPostorder(root) {
    if (root.left) this.dfsPreorder(root.left);
    if (root.right) this.dfsPreorder(root.right);
    this.data.push(root.val);
    return this.data;
  }

  dfsInorder(root) {
    if (root.left) this.dfsInorder(root.left);
    this.data.push(root.val);
    if (root.right) this.dfsInorder(root.right);
    return this.data;
  }
}

const binaryTree = new BinaryTree();
binaryTree.insert(5);
binaryTree.insert(4);
binaryTree.insert(6);
binaryTree.insert(8);
binaryTree.insert(3);

const binarySearchTree = new BinarySearchTree();
binarySearchTree.insert(5);
binarySearchTree.insert(4);
binarySearchTree.insert(6);
binarySearchTree.insert(8);
binarySearchTree.insert(3);

module.exports = { BinaryTree, BinarySearchTree };

const { SinglyLinkedList } = require("./singly-linked-list");

// There is a singly-linked list head and we want to delete a node node in it.

// You are given the node to be deleted node. You will not be given access to the first node of head.

// All the values of the linked list are unique, and it is guaranteed that the given node node is not the last node in the linked list.

// Input: head = [4,5,1,9], node = 5
// Output: [4,1,9]
// Explanation: You are given the second node with value 5, the linked list should become 4 -> 1 -> 9 after calling your function.

/**
 * Definition for singly-linked list.
 * function Node(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {Node} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function (node) {
  node.val = node.next.val;
  node.next = node.next.next;
};

const singlyLinkedList = new SinglyLinkedList();
singlyLinkedList.push(4);
singlyLinkedList.push(5);
singlyLinkedList.push(1);
singlyLinkedList.push(9);

console.log(singlyLinkedList.head);
console.log(deleteNode(singlyLinkedList.head.next));
console.log(singlyLinkedList.head);

const { SinglyLinkedList } = require("./singly-linked-list");

// Given the head of a singly linked list, return the middle node of the linked list.

// If there are two middle nodes, return the second middle node.

// Input: head = [1,2,3,4,5]
// Output: [3,4,5]
// Explanation: The middle node of the list is node 3.

/**
 * Definition for singly-linked list.
 * function Node(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {Node} head
 * @return {Node}
 */
const middleNode = function (head) {
  let length = 1,
    index = 0,
    middle,
    current = head;
  while (current.next) {
    current = current.next;
    length++;
  }
  if (!Number.isInteger(length / 2)) middle = Math.ceil(length / 2);
  else middle = length / 2 + 1;

  if (length == 2) return head.next;

  current = head;
  while (current.next) {
    if (middle - 1 == index) return (head = current);
    current = current.next;
    index++;
  }
  return head;
};

const singlyLinkedList = new SinglyLinkedList();
singlyLinkedList.push(1);
singlyLinkedList.push(2);
singlyLinkedList.push(3);
singlyLinkedList.push(4);
singlyLinkedList.push(5);

console.log(middleNode(singlyLinkedList.head));

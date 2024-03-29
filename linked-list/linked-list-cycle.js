const { SinglyLinkedList } = require("./singly-linked-list");

// Given head, the head of a linked list, determine if the linked list has a cycle in it.

// There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

// Return true if there is a cycle in the linked list. Otherwise, return false.

// Input: head = [3,2,0,-4], pos = 1
// Output: true
// Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
const hasCycle = function (head) {
  if (!head || !head.next) return false;

  let firsHead = head,
    secondHead = head;
  while (secondHead && secondHead.next) {
    firsHead = firsHead.next;
    secondHead = secondHead.next.next;
    if (firsHead === secondHead) return true;
  }
  return false;
};

const singlyLinkedList = new SinglyLinkedList();
singlyLinkedList.push(4);
singlyLinkedList.push(5);
singlyLinkedList.push(1);
// Connecting last node with first for question
singlyLinkedList.tail.next = singlyLinkedList.head;

console.log(hasCycle(singlyLinkedList.head));

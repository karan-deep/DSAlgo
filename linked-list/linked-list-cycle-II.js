const { SinglyLinkedList } = require("./singly-linked-list");

// Floyd's cycle detection algorithm

// Given the head of a linked list, return the node where the cycle begins. If there is no cycle, return null.

// There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to (0-indexed). It is -1 if there is no cycle. Note that pos is not passed as a parameter.

// Do not modify the linked list.

// Input: head = [3,2,0,-4], pos = 1
// Output: tail connects to node index 1
// Explanation: There is a cycle in the linked list, where tail connects to the second node.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const detectCycle = function (head) {
  if (!head || !head.next) return null;

  let firsHead = head,
    secondHead = head,
    arrayRepeatingNodes = [];
  while (secondHead && secondHead.next) {
    firsHead = firsHead.next;
    secondHead = secondHead.next.next;
    if (firsHead === secondHead) {
      if (arrayRepeatingNodes.includes(firsHead)) break;
      arrayRepeatingNodes.push(firsHead);
      secondHead = secondHead.next;
    }
  }
  while (head) {
    let i = 0;
    while (i < arrayRepeatingNodes.length) {
      if (arrayRepeatingNodes[i] === head) return head;
      i++;
    }
    head = head.next;
  }
  return null;
};

// the distance from the head node to node(where cycle starts) is equal to the distance from the point where the two pointers meet to node(where cycle starts)

const floydDetectCycleAlgo = function (head) {
  let cycle = false;
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      cycle = true;
      break;
    }
  }
  if (cycle)
    while (head.next) {
      if (head === slow) return head;
      head = head.next;
      slow = slow.next;
    }
  return null;
};

const singlyLinkedList = new SinglyLinkedList();
singlyLinkedList.push(4);
singlyLinkedList.push(5);
singlyLinkedList.push(1);
singlyLinkedList.push(2);
// Connecting last node with first for question
singlyLinkedList.tail.next = singlyLinkedList.head.next;

console.log(detectCycle(singlyLinkedList.head));
console.log(floydDetectCycleAlgo(singlyLinkedList.head));

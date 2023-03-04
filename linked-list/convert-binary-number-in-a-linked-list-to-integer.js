const { SinglyLinkedList } = require("./singly-linked-list");

// Given head which is a reference node to a singly-linked list. The value of each node in the linked list is either 0 or 1. The linked list holds the binary representation of a number.

// Return the decimal value of the number in the linked list.

// The most significant bit is at the head of the linked list.

// Input: head = [1,0,1]
// Output: 5
// Explanation: (101) in base 2 = (5) in base 10

/**
 * Definition for singly-linked list.
 * function Node(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {Node} head
 * @return {number}
 */
const getDecimalValue = function (head) {
  let length = 0,
    result = 0,
    current = head;
  while (current.next) {
    current = current.next;
    length++;
  }

  current = head;
  while (length >= 0) {
    result += current.val * Math.pow(2, length);
    current = current.next;
    length--;
  }

  return result;
};

const singlyLinkedList = new SinglyLinkedList();
singlyLinkedList.push(1);
singlyLinkedList.push(0);
singlyLinkedList.push(1);

console.log(getDecimalValue(singlyLinkedList.head));

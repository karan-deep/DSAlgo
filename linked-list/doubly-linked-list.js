class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.previous = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      let currentTail = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
      this.tail.previous = currentTail;
    }
    this.length += 1;
  }
  pop() {
    if (!this.head) return undefined;
    let currentTail = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = currentTail.previous;
      this.tail.next = null;
    }
    this.length -= 1;
  }
  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.previous = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length += 1;
  }
  shift() {
    if (!this.head) return undefined;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.previous = null;
    }
    this.length -= 1;
  }
}

let doublyLinkedList = new DoublyLinkedList();
doublyLinkedList.push("First");
doublyLinkedList.push("Second");
doublyLinkedList.push("Third");
console.log(doublyLinkedList);
doublyLinkedList.pop();
doublyLinkedList.pop();
doublyLinkedList.pop();
doublyLinkedList.unshift("Last at first");
console.log(doublyLinkedList);
doublyLinkedList.shift();

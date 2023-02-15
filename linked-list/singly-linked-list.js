class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
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
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length += 1;
  }
  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length -= 1;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
  }
  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      let currentHead = this.head;
      this.head = newNode;
      this.head.next = currentHead;
    }
    this.length += 1;
  }
  shift() {
    if (!this.head) return undefined;
    let current = this.head.next;
    this.head = current;
    this.length -= 1;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
  }
}

let singlyLinkedList = new SinglyLinkedList();
singlyLinkedList.push("First");
singlyLinkedList.push("Second");
singlyLinkedList.push("Third");
console.log(singlyLinkedList);
singlyLinkedList.pop();
console.log(singlyLinkedList);
singlyLinkedList.unshift("Last At first");
console.log(singlyLinkedList);
singlyLinkedList.shift();

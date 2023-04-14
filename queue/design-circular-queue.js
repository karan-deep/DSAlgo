// Design your implementation of the circular queue. The circular queue is a linear data structure in which the operations are performed based on FIFO (First In First Out) principle, and the last position is connected back to the first position to make a circle. It is also called "Ring Buffer".

// One of the benefits of the circular queue is that we can make use of the spaces in front of the queue. In a normal queue, once the queue becomes full, we cannot insert the next element even if there is a space in front of the queue. But using the circular queue, we can use the space to store new values.

// Implement the MyCircularQueue class:

// MyCircularQueue(k) Initializes the object with the size of the queue to be k.
// int Front() Gets the front item from the queue. If the queue is empty, return -1.
// int Rear() Gets the last item from the queue. If the queue is empty, return -1.
// boolean enQueue(int value) Inserts an element into the circular queue. Return true if the operation is successful.
// boolean deQueue() Deletes an element from the circular queue. Return true if the operation is successful.
// boolean isEmpty() Checks whether the circular queue is empty or not.
// boolean isFull() Checks whether the circular queue is full or not.
// You must solve the problem without using the built-in queue data structure in your programming language.

// Input
// ["MyCircularQueue", "enQueue", "enQueue", "enQueue", "enQueue", "Rear", "isFull", "deQueue", "enQueue", "Rear"]
// [[3], [1], [2], [3], [4], [], [], [], [4], []]
// Output
// [null, true, true, true, false, 3, true, true, true, 4]

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class MyCircularQueue {
  constructor(k) {
    this.first = null;
    this.last = null;
    this.length = 0;
    this.k = k;
  }
  enQueue(val) {
    if (this.length === this.k) return false;
    let newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
      this.last.next = this.first;
    }
    this.length += 1;
    return true;
  }
  deQueue() {
    if (!this.first) return false;
    let current = this.first;
    this.first = current.next;
    this.last.next = this.first;
    this.length -= 1;
    if (this.length === 0) {
      this.first = null;
      this.last = null;
    }
    return true;
  }
  front() {
    if (!this.first) return -1;
    return this.first.val;
  }
  rear() {
    if (!this.first) return -1;
    return this.last.val;
  }
  isEmpty() {
    if (!this.first) return true;
    return false;
  }
  isFull() {
    if (this.length === this.k) return true;
    return false;
  }
}

let obj = new MyCircularQueue(3);
let param_1 = obj.enQueue(1);
let param_2 = obj.enQueue(2);
let param_3 = obj.enQueue(3);
let param_4 = obj.enQueue(4);
let param_5 = obj.rear();
let param_6 = obj.isFull();
let param_7 = obj.deQueue();
let param_8 = obj.enQueue(4);
let param_9 = obj.rear();

console.log(param_1);
console.log(param_2);
console.log(param_3);
console.log(param_4);
console.log(param_5);
console.log(param_6);
console.log(param_7);
console.log(param_8);
console.log(param_9);

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  queue(val) {
    let newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length += 1;
  }
  dequeue() {
    if (!this.first) return undefined;
    let current = this.first;
    this.first = current.next;
    this.length -= 1;
    if (this.length === 0) {
      this.first = null;
      this.last = null;
    }
  }
}

let queue = new Queue();
queue.queue("First");
queue.queue("Second");
queue.queue("Third");
console.log(queue);
queue.dequeue();
queue.dequeue();
console.log(queue);

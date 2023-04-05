class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let current = this.last;
      this.last = newNode;
      this.last.next = current;
    }
    this.length += 1;
  }
  pop() {
    if (!this.first) return undefined;
    this.last = this.last.next;
    this.length -= 1;
    if (this.length === 0) {
      this.first = null;
      this.last = null;
    }
  }
}

let stack = new Stack();
stack.push("First");
stack.push("Second");
stack.push("Third");
console.log(stack);
stack.pop();
stack.pop();
console.log(stack);

module.exports = { Stack };

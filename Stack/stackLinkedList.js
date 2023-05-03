class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class StackLinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  isEmpty() {
    return this.head === null;
  }
  push(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
  }
  pop() {
    if (this.isEmpty()) {
      console.log("stack is empty");
    } else {
      this.head = this.head.next;
    }
  }
  peak() {
    return this.head.value;
  }
  display() {
    if (this.isEmpty()) {
      console.log("stack is empty");
    } else {
      let curr = this.head;
      let values = "";
      while (curr) {
        values += `${curr.value} `;
        curr = curr.next;
      }
      console.log(values);
    }
  }
}

const stack = new StackLinkedList();
stack.push(10);
stack.push(20);
stack.push(30);
stack.pop();
stack.display();

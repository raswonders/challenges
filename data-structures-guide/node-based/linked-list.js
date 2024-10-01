import { Node } from "./node.mjs";

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  append(newNode) {
    newNode.next = this.head;
    this.head = newNode;
  }

  printAll() {
    let current = this.head;
    while (current) {
      console.log(current);
      current = current.next;
    }
  }
}

let list = new LinkedList();
list.append(new Node(32))
list.append(new Node(34))
list.append(new Node(37))

list.printAll();

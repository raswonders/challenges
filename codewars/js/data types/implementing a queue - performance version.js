class Queue {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  enqueue(value) {
    if (this.length === 0) {
      this.head = this.tail = { value, next: null };
    } else {
      this.tail.next = { value, next: null};
      this.tail = this.tail.next;
    }
    this.length++;
  }

  dequeue() {
    let value;
    if (this.head) {
      value = this.head.value;
      this.head = this.head.next;
      this.length--;
    }
    return value;
  }

  size() {
    return this.length;
  }
}

let q = new Queue;
q.enqueue(1);
q.enqueue(2);
console.log(q)
console.log(q.size())

q.dequeue();
let val = q.dequeue();
console.log(val)
val = q.dequeue();
console.log(val)
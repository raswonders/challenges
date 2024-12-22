export class Queue {
  constructor(...data) {
    this.data = [...data];
  }

  read() {
    return this.data[0];
  }

  enqueue(value) {
    this.data.push(value);
    return this.data;
  }

  dequeue() {
    return this.data.shift();
  }
}

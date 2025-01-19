class MinStack {
  constructor() {
    this.stack = [];
    this.minStack = [];
  }

  push(val) {
    this.stack.push(val);
    let minVal = this.minStack.length > 0 ? Math.min(this.minStack.at(-1), val) : val;
    this.minStack.push(minVal);
  }

  pop() {
    this.minStack.pop();
    return this.stack.pop();
  }

  top() {
    return this.stack.at(-1);
  }

  getMin() {
    return this.minStack.at(-1);
  }
}

let s = new MinStack();

s.push(-2);
// -2
console.log(s.getMin())

s.push(0);
// -2
console.log(s.getMin())

s.push(-3);
// -3
console.log(s.getMin())
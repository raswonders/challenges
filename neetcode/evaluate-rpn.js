class Solution {
  operators = [
    "+",
    "-",
    "/",
    "*"
  ]

  constructor() {
    this.stack = [];
  }

  push(val) {
    this.stack.push(val);
  }

  pop() {
    return this.stack.pop();
  }

  top() {
    return this.stack.at(-1);
  }

  evalRPN(tokens) {
    for (let t of tokens) {
      if (this.operators.includes(t)) {
        let b = this.pop();
        let a = this.pop();
        let result;
        switch (t) {
          case "+": 
            result = a + b;
            break;
          case "-":
            result = a - b;
            break;
          case "*":
            result = a * b;
            break;
          case "/":
            result = Math.trunc(a / b);
            break;
        }
        this.push(result);
      } else {
        this.push(parseInt(t));
      }
    }
    return this.pop()
  };
}

let solution = new Solution;
let INPUT = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"];
// 22
console.log(solution.evalRPN(INPUT))

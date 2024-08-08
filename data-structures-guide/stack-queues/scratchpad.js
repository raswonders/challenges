class Stack {
  constructor() {
    this.data = [];
  }

  push(elem) {
    this.data.push(elem);
  }

  pop() {
    return this.data.pop();
  }

  read() {
    return this.data.at(-1);
  }
}

class Queue {
  constructor() {
    this.data = [];
  }

  enqueue(item) {
    return this.data.push(item);
  }

  dequeue() {
    return this.data.shift();
  }

  read() {
    return this.data[0];
  }
}

let a = new Queue();

class PrintManager {
  constructor() {
    this.queue = new Queue();
  }

  add(job) {
    this.queue.enqueue(job);
  }

  run() {
    while (this.queue.read()) {
      console.log(this.queue.dequeue());
    }
  }
}

let pm = new PrintManager();
pm.add("first job");
pm.add("second job");
pm.add("third job");
pm.run();

openingBraces = ["(", "[", "{"];
closingBraces = [")", "]", "}"];

class Linter {
  constructor() {
    this.stack = new Stack();
  }

  lint(text) {
    for (char of text) {
      if (openingBraces.includes(char)) {
        this.stack.push(char);
      }

      if (closingBraces.includes(char)) {
        let lastBrace = this.stack.pop();
        if (closingBraces.indexOf(char) !== openingBraces.indexOf(lastBrace)) {
          throw Error("");
        }
      }
    }
  }
}
let char = "s";
Boolean(char in ["(", "[", "{"]);

function countdownRecursive(num) {
  if (num < 0) return;
  console.log(num);
  countdownRecursive(num - 1);
}

countdownRecursive(15);

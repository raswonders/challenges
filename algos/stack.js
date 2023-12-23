  class Stack {
  constructor() {
    this.data = [];
  }

  push(item) {
    return this.data.push(item);
  }

  pop(item) {
    return this.data.pop();
  }

  size() {
    return this.data.length;
  }
}

const lint = (line) => {
  const opening = ["(", "[", "{"];
  const closing = [")", "]", "}"];
  const stack = new Stack();

  for (let char of line) {
    if (opening.includes(char)) {
      stack.push(char);
      continue;
    }

    if (closing.includes(char)) {
      if (stack.size === 0) return "Error type 1";

      if (closing.indexOf(stack.pop()) === opening.indexOf(char)) {
        continue;
      } else {
        return "Error type 3";
      }
    }
  }

  return stack.size() === 0 ? "OK" : "Error type 2";
};

console.log(lint("(var x = {y: [1,2,3]})"));
// TODO
// Write a function that uses a stack to reverse a string. (For example, "abcde"
// would become "edcba".) You can work with our earlier implementation of
// the Stack class.

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

function reverseString(str) {
  const stack = new Stack();

  for (let char of str) {
    stack.push(char);
  }

  let result = "";

  while (stack.read()) {
    result += stack.pop();
  }

  return result;
}

console.log(reverseString("abcd"));
// dcba

console.log(reverseString(""));
// ""

const fs = require("fs");

let supply = [
  ,
  ["F", "C", "P", "G", "Q", "R"],
  ["W", "T", "C", "P"],
  ["B", "H", "P", "M", "C"],
  ["L", "T", "Q", "S", "M", "P", "R"],
  ["P", "H", "J", "Z", "V", "G", "N"],
  ["D", "P", "J"],
  ["L", "G", "P", "Z", "F", "J", "T", "R"],
  ["N", "L", "H", "C", "F", "P", "T", "J"],
  ["G", "V", "Z", "Q", "H", "T", "C", "W"]
];

fs.readFile("./input.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  let orders = data.split("\n");

  for (order of orders) {
    let repetition, sourceStack, destStack;
    [repetition, sourceStack, destStack] = order.match(/\d+/g) || [];

    for (let i = 1; i <= repetition; i++) {
      supply[destStack].push(supply[sourceStack].pop());
    }
  }

  console.log(supply.map(stack => stack[stack.length - 1]).join(''))
});

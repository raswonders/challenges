const fs = require("fs");

let supply9000 = [
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

let supply9001 = [
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
    let repetition, amount, sourceStack, destStack;
    [repetition, sourceStack, destStack] = order.match(/\d+/g) || [];
    amount = repetition;

    // part1 crateMover9000   
    for (let i = 1; i <= repetition; i++) {
      supply9000[destStack].push(supply9000[sourceStack].pop());
    }

    // part2 crateMover9001  
    supply9001[destStack] = supply9001[destStack].concat(supply9001[sourceStack].splice(-amount))
  }
  
  console.log('result of crateMover9000', supply9000.map(stack => stack[stack.length - 1]).join(''))
  console.log('result of crateMover9001', supply9001.map(stack => stack[stack.length - 1]).join(''))
});

const fs = require("fs");

fs.readFile("./input.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  // readin the input data
  // transform data into array of rucksacks
  // for each rucksack
  // divide the rucksack in half
  // slice(0, length/2)
  // slice(length/2)
  // identify element which is in both compartments
  // for each element in compartment one check if it's not in other compartment
  // if it is add its priority value to total

  data = data.split("\n");

  const elements = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let total = 0;
  for (let rucksack of data) {
    let edge = rucksack.length / 2;
    let comp1 = rucksack.slice(0, edge).split("");
    let comp2 = rucksack.slice(edge).split("");

    for (let elem of comp1) {
      if (comp2.includes(elem)) {
        total += elements.indexOf(elem) + 1;
        break;
      }
    }
  }

  console.log(total);
});

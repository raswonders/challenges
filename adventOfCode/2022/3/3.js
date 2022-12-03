const fs = require("fs");

fs.readFile("./input.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  // part 1
  data = data.split("\n");

  const priority = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let total = 0;
  for (let rucksack of data) {
    let edge = rucksack.length / 2;
    let comp1 = rucksack.slice(0, edge).split("");
    let comp2 = rucksack.slice(edge).split("");

    for (let elem of comp1) {
      if (comp2.includes(elem)) {
        total += priority.indexOf(elem) + 1;
        break;
      }
    }
  }

  console.log(total);

  let group;
  let groups = [];
  while ((group = data.splice(0, 3)) && group.length > 0) {
    groups.push(group)
  }

  let groupTotal = 0;
  for (group of groups) {
    let rucksack1,
        rucksack2,
        rucksack3;

    [rucksack1, rucksack2, rucksack3] = group;

    for (elem of rucksack1.split('')) {
      if (rucksack2.includes(elem) && rucksack3.includes(elem)) {
        groupTotal += priority.indexOf(elem) + 1; 
        break;
      }
    }
  }

  console.log(groupTotal);
});

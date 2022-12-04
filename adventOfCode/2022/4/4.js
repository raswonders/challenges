const fs = require("fs");

fs.readFile("./input.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  let assignments = data.split('\n').map(ass => ass.split(',').map(range => range.split('-').map(str => Number(str))))

  let total = 0;
  assignments.map(ass => {
    let range1 = ass[0];
    let range2 = ass[1];

    if (range1[0] >= range2[0] && range1[1] <= range2[1]) total++;
    else if (range1[0] <= range2[0] && range1[1] >= range2[1]) total++;
  })

  console.log(total)
})
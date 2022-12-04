const fs = require("fs");

fs.readFile("./input.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  let assignments = data.split('\n').map(ass => ass.split(',').map(range => range.split('-').map(str => Number(str))))

  let totalContained = 0;
  let totalOverlaped = 0;
  for (assignemnt of assignments) {
    let range1 = assignemnt[0];
    let range2 = assignemnt[1];

    if (range1[0] >= range2[0] && range1[1] <= range2[1]) {
      totalContained++;
      continue;
    } else if (range1[0] <= range2[0] && range1[1] >= range2[1]) {
      totalContained++;
      continue;
    }

    if (range1[0] >= range2[0] && range1[0] <= range2[1]) {
      totalOverlaped++;
    } else if (range1[1] >= range2[0] && range1[1] <= range2[1]) {
      totalOverlaped++;
    }
  }

  totalOverlaped += totalContained;

  console.log("no. contained", totalContained)
  console.log("no. overlaped", totalOverlaped)
})

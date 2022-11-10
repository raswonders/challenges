const fs = require('fs');

fs.readFile('./input1.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  
  let depth = data.split('\n').map(item => Number(item))

  let increasedCount = 0;
  for (let i = 0; i < depth.length - 4; i++) {
    let sumA = depth.slice(i, i+3)
                    .reduce((acc, curr) => acc += curr);

    let sumB = depth.slice(i+1, i+4)
                    .reduce((acc, curr) => acc += curr);

    increasedCount +=  sumA < sumB ? 1 : 0;
  }
  
  console.log(increasedCount)
});
const fs = require('fs');

fs.readFile('./input1.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  
  const depth = data.split('\n').map(item => Number(item))
  
  let increasedCount = 0;
  for (let i = 0; i < depth.length - 1; i++) {
    increasedCount += depth[i] < depth[i+1] ? 1 : 0;
  }

});
const fs = require('fs');

fs.readFile('./input.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  };

  let calPerElf = data.split('\n\n')
                      .map(calories => {
                        let calList = calories.match(/\d+/g) || [0];
                        return calList.map(item => Number(item))
                                      .reduce((acc, curr) => acc += curr);
                      });

  let calTopThree = calPerElf.sort((a, b) => b - a)
                             .slice(0, 3)
                             .reduce((acc, curr) => acc += curr);

  console.log(calTopThree);
})
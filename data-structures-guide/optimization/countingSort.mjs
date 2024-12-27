function createGroupings(array) {
  const index = {};

  for (let num of array) {
    index[num] = index[num] ? index[num] + 1 : 1;
  }

  const result = [];
  let temperature = 95;
  while (temperature <= 105) {
    while (index[temperature] > 0) {
      result.push(temperature);
      index[temperature] = index[temperature] - 1;
    }
    temperature++;
  }

  return result;
}

console.log(createGroupings([98, 99, 95, 105, 104, 99, 101, 99, 101, 97]));

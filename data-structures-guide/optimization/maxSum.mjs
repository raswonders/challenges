function maxSum(array) {
  if (array.length <= 0) {
    return null;
  }

  let greatestSum = 0;
  let currentSum = 0;
  for (let num of array) {
    if (currentSum + num < 0) {
      currentSum = 0;
    } else {
      currentSum += num;
      greatestSum = currentSum > greatestSum ? currentSum : greatestSum;
    }
  }

  return greatestSum;
}

console.log(maxSum([3, -4, 4, -3, 5, -9]));

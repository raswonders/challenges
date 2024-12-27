function longestSequenceBrute(array) {
  array.sort((a, b) => a - b);
  let longest = 0;
  let current = 0;
  for (let i = 0; i < array.length - 1; i++) {
    let j = i + 1;
    if (array[j] - array[i] === 1) {
      current++;
    } else {
      current = 0;
    }

    if (current > longest) {
      longest = current;
    }
  }

  return longest;
}

console.log(longestSequenceBrute([10, 5, 12, 3, 55, 30, 4, 11, 2]));

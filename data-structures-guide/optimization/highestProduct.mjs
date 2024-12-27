// O(N*N)
function highestProductBrute(array) {
  let max = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (max < array[i] * array[j]) {
        max = array[i] * array[j];
      }
    }
  }

  return max;
}

// O(N log N)
function highestProduct(array) {
  array.sort((a, b) => a - b);
  let head = array.at(0) * array.at(1);
  let tail = array.at(-2) * array.at(-1);
  return head > tail ? head : tail;
}

console.log(highestProduct([5, -10, -6, 9, 4]));

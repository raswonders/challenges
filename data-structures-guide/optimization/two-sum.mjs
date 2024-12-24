// we have list of numbers
// GOAL find out if list contains two which results in 10 when added
console.log(sumTwoOptimal([2, 0, 4, 5, 3, 9]));

// O(N*N/2) ~ O(N^2)
function sumTwo(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === 10) {
        return true;
      }
    }
  }

  return false;
}

function sumTwoOptimal(array) {
  const index = new Set();
  for (let i = 0; i < array.length; i++) {
    if (index.has(array[i])) {
      return true;
    }

    index.add(array[i]);
  }

  return false;
}

// Write three different implementations of a function that finds the greatest
// number within an array. Write one function that is O(N2
// ), one that is O(N
// log N), and one that is O(N).

// O(N2)
function greatestNumber1(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let isGreatest = true;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] > arr[i]) {
        isGreatest = false;
      }
    }
    if (isGreatest) {
      return arr[i];
    }
  }
}

// O(N log N)
function greatestNumber2(arr) {
  arr.sort((a, b) => a - b);
  return arr[arr.length - 1];
}

// O(N)
function greatestNumber3(arr) {
  if (arr.length === 0) return null;

  let greatest = arr[0];
  for (let i = 0; i < arr.length; i++) {
    greatest = arr[i] > greatest ? arr[i] : greatest;
  }

  return greatest;
}

console.log(greatestNumber1([2, 3, 21, 4]));
console.log(greatestNumber2([2, 3, 21, 4]));
console.log(greatestNumber3([2, 3, 21, 4]));

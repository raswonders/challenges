function binarray(a) {
  for (let k = a.length; k > 1; k--) {
    for (let i = 0; i+k <= a.length; i++) {
      let subArray = a.slice(i, i+k);
      if (hasEqualOnesToZeros(subArray)) return subArray.length;
    }
  }
  return 0;
}

function hasEqualOnesToZeros(arr) {
  let ones = 0;
  let zeroes = 0;
  for (let i = 0; i < arr.length; i++) {
    arr[i] === 1 ? ones++ : zeroes++;
  }
  return ones === zeroes;
}

// EXAMPLES
console.log(binarray([1,1,0,1,1,0,1,1]))
// 4
function common(arrA, arrB, arrC) {
  // Transform array into frequency objects
  [freqA, freqB, freqC] = [arrA, arrB, arrC].map(arr => {
    let numFrequency = {};
    for (let i = 0; i < arr.length; i++) {
      numFrequency[arr[i]] = (numFrequency[arr[i]] || 0) + 1;
    }
    return numFrequency;
  });

  // Sum min occurrences for each number
  let sum = 0;
  for (const key of Object.keys(freqA)) {
    sum += Math.min(freqA[key], freqB[key] || 0, freqC[key] || 0) * key;
  }
  return sum;
}

// 7
console.log(common([1, 2, 2, 3], [5, 3, 2, 2], [7, 3, 2, 2]));

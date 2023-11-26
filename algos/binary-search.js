function binarySearch(arr, val) {
  if (arr.length === 0) return -1;

  let lower = 0;
  let upper = arr.length - 1;

  while (lower <= upper) {
    let mid = Math.floor((lower + upper) / 2);

    if (val === arr[mid]) return mid;
    else if (val > arr[mid]) lower = mid + 1;
    else if (val < arr[mid]) upper = mid - 1;
  }

  return -1;
}

// EXAMPLES
console.log(binarySearch([1, 2, 5, 8, 9], 1)); // 0
console.log(binarySearch([1, 2, 5, 8, 9], 9)); // 4
console.log(binarySearch([1, 2, 5, 8, 9], 12)); // -1
console.log(binarySearch([], 12)); // -1

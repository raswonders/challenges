function repeats(arr){
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    let hasDuplicate = arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i])

    if (hasDuplicate) continue;
    sum += arr[i];
  }

  return sum;
}


// 3
console.log(repeats([1,2,4,4]));

// cannot happen
// console.log(repeats([4,4]));

// 3
console.log(repeats([1,2,4,4,5,5]));

// 3
// beacuse order doesn't matter
console.log(repeats([1,4,4,5,5,2]));

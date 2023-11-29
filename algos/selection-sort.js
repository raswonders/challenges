function selectionSort(array) {
  const arr = array.slice();

  for (let i = 0; i < arr.length - 1; i++) {
    let lowest = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) lowest = j;
    }

    [arr[i], arr[lowest]] = [arr[lowest], arr[i]];
  }

  return  arr;
}


console.log(selectionSort([4,2,7,1,3])) // [1,2,3,4,7]
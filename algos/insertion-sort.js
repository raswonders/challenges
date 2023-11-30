function insertionSort(array) {
  let arr = [...array];

  for (let i = 1; i < arr.length; i++) {
    let temp = arr[i];
    let j = i - 1;
    for ( ; j >= 0; j--) {
      if (arr[j] > temp) arr[j + 1] = arr[j];
      else break;
    }

    arr[j + 1] = temp;
  }

  return arr;
}

console.log(insertionSort([4,2,7,1,3]));

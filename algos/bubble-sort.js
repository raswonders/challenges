function bubbleSort(array) {
  let arr = [...array];
  let lastSorted = arr.length;
  let sorted = false;

  while (!sorted) {
    sorted = true;
    for (let i = 0; i + 1 < lastSorted; i++) {
      if (arr[i] <= arr[i + 1]) continue; 
      
      sorted = false;
      [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
    }

    lastSorted--;
  }

  return arr;
}

console.log(bubbleSort([4,2,7,1,3]));
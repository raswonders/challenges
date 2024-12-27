// O(N*N)
function stockPredictionBrute(array) {
  let max = 0;
  for (let i = 0; i < array.length; i++) {
    let buy = array[i];
    for (let j = i + 1; j < array.length; j++) {
      let sell = array[j];
      if (max < sell - buy) {
        max = sell - buy;
      }
    }
  }

  return max;
}

// O(N)
function stockPrediction(array) {
  let buy = array[0];
  let max = 0;
  for (let i = 1; i < array.length; i++) {
    let sell = array[i];
    if (sell - buy < 0) {
      buy = array[i];
    } else {
      if (max < sell - buy) {
        max = sell - buy;
      }
    }
  }

  return max;
}

console.log(stockPrediction([10, 7, 5, 8, 11, 2, 6]));

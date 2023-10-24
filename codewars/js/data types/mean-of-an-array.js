function getAverage(marks){
  let sum = marks.reduce((acc, curr) => acc + curr)

  return Math.floor(sum / marks.length);
}

// 1
console.log(getAverage([1,2]));
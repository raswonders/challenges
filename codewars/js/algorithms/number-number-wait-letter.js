function doMath(str) {
  let arr = str.split(" "); 

  arr.sort((a, b) => {
    let charA = a.match(/[a-z]/i);
    let charB = b.match(/[a-z]/i);
    return charA[0].charCodeAt(0) - charB[0].charCodeAt(0);
  });

  let digits = arr.map((item) => {
    return item.replace(/[a-z]/i, "");
  });

  let integers = digits.map((item) => {
    return parseInt(item);
  });

  return Math.round(integers.reduce((acc, curr, index) => {
    if (index % 4 === 0) return acc + curr;
    if (index % 4 === 1) return acc - curr;
    if (index % 4 === 2) return acc * curr;
    if (index % 4 === 3) return acc / curr;
  }))
}
// SEQUENCE codes
// 0 - unordered
// 1 - strictly increasing
// 2 - not decreasing
// 3 - strictly decreasing
// 4 - not increasing
// 5 - constant
function sequenceClassifier(arr) {
  let sequence = Array(6).fill(true);
  if (arr.length === 1) return 5;
  arr.reduce((prev, curr) => {
    if (curr > prev) {
      sequence[3] = sequence[4] = sequence[5] = false;
    } else if (curr < prev) {
      sequence[1] = sequence[2] = sequence[5] = false;
    } else {
      sequence[1] = sequence[3] = false;
    }
    return curr;
  });

  if (sequence[5]) return 5;
  let result = sequence.indexOf(true, 1);
  return result === -1 ? 0 : result;
}

// EXAMPLES

console.log(sequenceClassifier([7, 2, 3, 4, 5])); // 0
console.log(sequenceClassifier([1, 2, 3, 4, 5])); // 1
console.log(sequenceClassifier([1, 2, 3, 3, 5])); // 2
console.log(sequenceClassifier([5, 4, 3, 2, 1])); // 3
console.log(sequenceClassifier([5, 4, 4, 2, 1])); // 4
console.log(sequenceClassifier([1])); // 5

// Huge array
let hugeArr = [];
for (let i = 0; i < 1000000; i++) {
  hugeArr.push(i);
}
console.log(sequenceClassifier(hugeArr)); // 1

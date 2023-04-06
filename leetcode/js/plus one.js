// Solution manipulating arrays
function plusOne(digits) {
  let carryOver = false;
  let buffer = [];
  while (digits.length !== 0) {
    let last = digits.pop();
    last++;
    carryOver = false;
    if (last === 10) {
      buffer.push(0)
      carryOver = true;
    } 
    else {
      buffer.push(last);
      break;
    }
  }
  if (carryOver) buffer.push(1)
  return digits.concat(buffer.reverse());
}

// Solution using Number/BigInt arithmetic
function plusOne(digits) {
  const num = Number(digits.join(""));
  const isNumUnprecise = num > Number.MAX_SAFE_INTEGER;
  const result = isNumUnprecise ? BigInt(digits.join("")) + 1n : num + 1; 
  return Array.from(String(result));
}


console.log(plusOne([1,2,3]))
// [1,2,4]

console.log(plusOne([9]))
// [1,0]
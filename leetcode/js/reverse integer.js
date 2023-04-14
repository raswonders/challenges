const MAX_INT = Math.pow(2, 31);
const MIN_INT = -MAX_INT;

function reverse(x) {
  let xPos = x < 0 ? -x : x;
  let xRev = ((String(xPos).split("").reverse().join("")))
  xRev = x < 0 ? -xRev : +xRev;

  const isOutOfBound = xRev > MAX_INT || xRev < MIN_INT;
  return isOutOfBound ? 0 : xRev;
}

console.log(reverse(9000))
// -9000

console.log(reverse(-9000))
// 9000

console.log(reverse(2147483649))
// 0

console.log(reverse(-2147483649))
// 0

console.log(reverse(-123))
// -321 
function isPowerOfFour(n) {
  if (n === 1) return true;
  if (n < 1) return false;
  return isPowerOfFour(n / 4)
};

console.log(isPowerOfFour(1))
// true
console.log(isPowerOfFour(4))
// true
console.log(isPowerOfFour(16))
// true
console.log(isPowerOfFour(2))
// false
console.log(isPowerOfFour(0))
// false
console.log(isPowerOfFour(8))
// false
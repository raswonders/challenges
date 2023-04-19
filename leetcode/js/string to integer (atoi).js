function myAtoi(s) {
  const MAX = Math.pow(2, 31) - 1;
  const MIN = -Math.pow(2, 31);
  const match = s.trimStart().match(/^[+-]?\d+/);
  let integer = match ? Number(match[0]) : 0;

  if (integer > MAX) return MAX;
  if (integer < MIN) return MIN;
  return integer;
}

// EXAMPLES
console.log(myAtoi("  0000000000012345678"));
// 12345678
console.log(myAtoi("+1"));
// 1
console.log(myAtoi("not a number"));
// 0
console.log(myAtoi("42"));
// 42
console.log(myAtoi("-42"));
// -42
console.log(myAtoi("42 is a number"));
// 42
console.log(myAtoi("what about 42"));
// 0
console.log(myAtoi("1000000000000000000000"));
// 2147483647
console.log(myAtoi("-1000000000000000000000"));
// -2147483648
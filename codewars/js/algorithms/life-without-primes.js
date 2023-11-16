function isPrime(n) {
  if (n === 1) return false;

  let mid = Math.floor(Math.sqrt(n));
  for (let i = 2; i <= mid; i++ ) {
    if (n % i === 0) return false;
  }

  return true;
}

function solve(n) {
  let elem = 1;

  while (n--) 
    while (/[2357]/.test((++elem).toString()) || isPrime(elem));

  return elem;
}

// EXAMPLES
console.log(solve(0)); // 1
console.log(solve(1)); // 4
console.log(solve(2)); // 6
console.log(solve(3)); // 8
console.log(solve(4)); // 9
console.log(solve(5)); // 10
console.log(solve(6)); // 14

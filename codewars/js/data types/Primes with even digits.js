const f = n => largestPrimeWithEvenDigits(n);

function largestPrimeWithEvenDigits(n) {
  let largestPrime = null;
  let maxEvenDigits = 0;
  for (--n; n > 1; n--) {
    if (isPrime(n)) {
      if (evenDigits(n) > maxEvenDigits) {
        maxEvenDigits = evenDigits(n);
        largestPrime = n;
      }
    }
  }
  return largestPrime;
}

function isPrime(n) {
  if (n % 2 === 0 || n % 3 === 0) return false;
  let i = 5;
  while (i * i <= n) {
    if (n % i === 0 || n % (i + 2) === 0) return false;
    i += 6;
  }
  return true;
}

function evenDigits(n) {
  return String(n)
          .split('')
          .filter(digit => digit % 2 === 0)
          .length
}
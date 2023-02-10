const f = n => largestPrimeWithEvenDigits(n - 1);
  
function largestPrimeWithEvenDigits(n, primeCandidates=[]) {
  if (n <= 1) return null
  
  if (isPrime(n)) {
    if (evenDigits(n) === digits(n) - 1) {
      if (primeCandidates.length === 0) return n;
      else return evenDigits(n) > evenDigits(primeCandidates[0]) 
                    ? n
                    : primeCandidates[0];
    }
    
    if (evenDigits(n) === digits(n) - 2) {
      primeCandidates.push(n);
      return largestPrimeWithEvenDigits(n - 1, primeCandidates);
    }
  } 
  return largestPrimeWithEvenDigits(n - 1, primeCandidates);
}

function isPrime(n) {
  if (n <= 1) return false;
  if (n <= 3) return true;
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

function digits(n) {
  return String(n).length;
}
function nextPrime(n) {
  if (n < 2) return 2;

  while (true) {
    n++;
    let isPrime = true;

    for (let i = 2, midPoint = Math.sqrt(n); i <= midPoint; i++) {
      if (n % i === 0) {
        isPrime = false;
        break;
      } 
    }

    if (isPrime) return n;
  }
}

let primes = [2];

function primeFactors(n) {
  let primeIndex = 0;
  let factors = [];
  while (true) {
    if (n === 1) return factors;

    if (primeIndex >= primes.length) {
      primes.push(nextPrime(primes[primes.length - 1]));
    }
    let prime = primes[primeIndex];

    let isFactor = n % prime === 0;
    if (isFactor) {
      factors.push(prime);
      n = n / prime;
    } else {
      primeIndex++;
    }
  }
}

// EXAMPLES
console.log(primeFactors(1)); // []
console.log(primeFactors(2)); // [2]
console.log(primeFactors(3)); // [3]
console.log(primeFactors(4)); // [2, 2]
console.log(primeFactors(5)); // [5]
console.log(primeFactors(6)); // [2, 3]
console.log(primeFactors(20)); // [2, 2, 5]

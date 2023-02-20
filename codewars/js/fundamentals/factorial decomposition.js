function decomp(n) {
  const factors = Array(n).fill().map((_, i) => i + 1);
  const primes = factors.filter(isPrime);

  let answer = [];
  primes.forEach(prime => {
    let exponent = 0;
    factors.forEach(factor => {
      while (factor % prime === 0) {
        factor /= prime;
        exponent++;
      }
    });
    answer.push(exponent > 1 ? prime + '^' + exponent : prime);
  });

  return answer.join(' * ');
}

function isPrime(n) {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return n > 1;
}
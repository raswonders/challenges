function findEmirp(n){
  let emirps = generatePrimes(n).filter(isEmirp);
  return emirps.length ? [emirps.length, Math.max.apply(null, emirps), emirps.reduce((acc, cur) => acc+cur, 0)] : [0, 0, 0];
}

function generatePrimes(n) {
  let arr = [];
  for (let i=1; i<=n; i++) {
    if (isPrime(i)) arr.push(i);
  }
  return arr;
}

function isPrime(num) {
  if (num % 2 === 0 ) return false;
  let max = Math.sqrt(num);
  for (let i=3; i<=max; i+=2) {
    if (num % i === 0) return false;
  }
  return true;
}

function isEmirp(num) {
  let numReversed = Number((num.toString()).split('').reverse().join(''));
  if (num === numReversed) return false;
  return isPrime(numReversed);
}
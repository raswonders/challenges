function estSubsets(arr) {
  let uniqueValues = new Set(arr);
  let subsetsTotal = 0;
  for (let k = 1; k <= uniqueValues.size; k++) {
    subsetsTotal += getBinomialCoefficient(uniqueValues.size, k);
  }
  return subsetsTotal;
}

function getBinomialCoefficient(n, k) {
  return Math.round(factorial(n) / (factorial(k) * factorial(n - k)));
}

function factorial(num) {
  let result = 1;
  for (let i = 1; i <= num; i++) {
      result *= i;
  }
  return result;
}
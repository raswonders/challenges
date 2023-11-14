const memory = {0n: 0n, 1n: 1n};

function pell(n) {
  n = BigInt(n);
  if (!(n in memory)) memory[n] = 2n * pell(n - 1n) + pell(n - 2n);
  return memory[n];
}

// EXAMPLES
console.log(pell(0)) // 0n
console.log(pell(1)) // 1n
console.log(pell(2)) // 2n
console.log(pell(3)) // 5n
console.log(pell(20)) // 15127n
console.log(pell(100)) // 20724553714306524447936847888115281n

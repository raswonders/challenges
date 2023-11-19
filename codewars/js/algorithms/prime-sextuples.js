const isPrimeMem = {1: false};

function findPrimesSextuplet(sumLimit) {
  const isPrime = num => {
    if (num in isPrimeMem) return isPrimeMem[num];

    isPrimeMem[num] = false;
    for (let i = 2, sqrt = Math.floor(Math.sqrt(num)); i <= sqrt; i++) {
      if (num % i === 0) return false;
    }
   
    isPrimeMem[num] = true;
    return true;
  }

  let n = Math.floor((sumLimit - 38) / 6);
  while (n++) {
    let sextuplet = [n, n + 4, n + 6, n + 10, n + 12, n + 16];

    if (sextuplet.every(isPrime)) return sextuplet;
  }
}

// EXAMPLES
console.log(findPrimesSextuplet(70)) // [7, 11, 13, 17, 19, 23]
console.log(findPrimesSextuplet(600)) // [97, 101, 103, 107, 109, 113]);
console.log(findPrimesSextuplet(2000000)) // [1091257, 1091261, 1091263, 1091267, 1091269, 1091273]
function chirp(n) {
  return n === 1 ? 
    "chirp" :
    chirp(n>>1) + "-" + chirp(n - (n>>1))
}

console.log(chirp(100000));
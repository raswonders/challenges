function computeDepth(num, depth=1, digits=new Set()){ 
  (num * depth)
    .toString()
    .split('')
    .forEach(digit => digits.add(digit))
  
  return digits.size >= 10
          ? depth
          : computeDepth(num, ++depth, digits);
}

console.log(computeDepth(42)); // 9
function zipWith(fn, arrA, arrB) {
  const smallerArr = arrA.length > arrB.length ? arrB : arrA;
  return smallerArr.map((_, i) => fn(arrA[i], arrB[i]));
}

console.log(zipWith( Math.pow, [10,10,10,10], [0,1,2,3] ))    
// [1,10,100,1000]
console.log(zipWith( Math.max, [1,4,7,1,4,7], [4,7,1,4,7,1] ))
// [4,7,7,4,7,7]
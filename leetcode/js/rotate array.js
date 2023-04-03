function rotate(nums, k) {
  k = k % nums.length;
  const start = nums.length - k;
  const elems = nums.splice(start, k);
  nums.splice(0, 0, ...elems)
  return nums;
}

console.log(rotate([1,2], 5));
console.log(rotate([1,2,3,4,5,6,7], 4));
console.log(rotate([1,2,3,4,5,6,7], 5));
console.log(rotate([1,2,3,4,5,6,7], 6));
console.log(rotate([1,2,3,4,5,6,7], 7));
console.log(rotate([1,2,3,4,5,6,7], 8));
function intersect(nums1, nums2) {
  let result = [];
  while (nums1.length > 0) {
    let val = nums1.pop();
    let index = nums2.indexOf(val)
    if (index !== -1) {
      nums2.splice(index,1)
      result.push(val);
    }
  }
  return result;
}

// EXAMPLES
console.log(intersect([1,2,2,1],[2,2]))
// [2,2]

console.log(intersect([4,9,5],[9,4,9,8,4]))
//[9,4]

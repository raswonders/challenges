// bitwising same number results in 0,
// hence if we bitwsie each number in series of numbers where only
// one is guaranteed not to have duplicate, result will be the sole number   
function singleNumber(nums) {
  let uniqNum;
  for (let i = 0; i < nums.length; i++) {
    uniqNum ^= nums[i];
  }
  return uniqNum;
}

console.log(singleNumber([2,2,1]))
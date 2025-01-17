function threeSum(nums) {
  nums.sort((a, b) => a - b);
  let result = new Set();
  for (let i = 0; i < nums.length - 2; i++) {
    let l = i + 1;
    let r = nums.length - 1;
    while (l < r) {
      let sum = nums[i] + nums[l] + nums[r];
      if (sum === 0) {
        result.add([nums[i], nums[l], nums[r]].join(","));
        l++;
        r--;
      } else if (sum < 0) {
        l++;
      } else {
        r--;
      }
    }
  }
  return [...result].map(item => item.split(","));
}

//[[-1,-1,2],[-1,0,1]]
console.log(threeSum([-1, 0, 1, 2, -1, -4]))

// []
console.log(threeSum([0, 1, 1]))

// [[0,0,0]]
console.log(threeSum([0, 0, 0]))

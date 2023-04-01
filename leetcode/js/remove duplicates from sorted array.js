var removeDuplicates = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    while (i !== nums.lastIndexOf(nums[i])) {
      nums.splice(nums.lastIndexOf(nums[i]), 1);
    }
  }
  return nums.length;
};

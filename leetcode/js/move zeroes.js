// Solution using sort builtin O(nlogn)
function moveZeroes(nums) {
  nums.sort((a, b) => {
    if (a === 0 && b !== 0) return 1;
    if (a !== 0 && b === 0) return -1;
    return 0;
  })
  return nums;
}

// Solution manipulating array one traversal+swaping of elements 
function moveZeroes(nums) {
  let j = 0;
  for (let i = 0; i < nums.length; i++) {
    if(nums[i] !== 0) {
      if (i !== j) swap(nums, i, j) 
      j++;
    }
  }
  return nums
}

function swap(arr, in1, in2) {
  [arr[in1], arr[in2]] = [arr[in2], arr[in1]];
}

// Solution manipulating array two traversals 
function moveZeroes(nums) {
  let j = 0;
  for (let i = 0; i < nums.length; i++) {
    if(nums[i] !== 0) {
      nums[j] = nums[i];
      j++;
    }
  }
  for (let i = j; i < nums.length; i++) {
    nums[i] = 0;
  }
  return nums
}
console.log(moveZeroes([0,1,0,3,12]));


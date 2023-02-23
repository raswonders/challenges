function sumNoDuplicates(nums) {
  return nums
          .filter((item, index) => nums.indexOf(item) === index)
          .reduce((acc, curr) => {
            acc += curr;
            return acc;
          }, 0);
}

console.log(sumNoDuplicates([1, 1, 2, 2, 3]));
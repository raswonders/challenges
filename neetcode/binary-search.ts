import { expect, test } from "bun:test";

function binarySearch(nums, target, l, r) {
  while (l <= r) {
    let mid = l + Math.floor(Math.abs(l - r) / 2);
    console.log({nums, target, l, r, mid})
    if (target === nums[mid]) {
      return mid;
    } else if (target > nums[mid]) {
      l = mid + 1;
    } else if (target < nums[mid]) {
      r = mid - 1;
    }
  }
  return -1;
}

function search(nums, target) {
  return binarySearch(nums, target, 0, nums.length - 1);
}

test("target is found", () => {
   expect(search([-1,0,2,4,6,8], 4)).toBe(3);
})

test("target is NOT found", () => {
  expect(search([-1,0,2,4,6,8], 3)).toBe(-1);
})

test("target on the right side", () => {
  let nums=[-1,0,3,5,9,12]
  let target=9
  expect(search(nums, target)).toBe(4);
})

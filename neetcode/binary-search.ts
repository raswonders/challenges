import { expect, test } from "bun:test";

function search(nums, target, offset = 0) {
  if (nums.length === 0) {
    return -1
  } 

  let mid = Math.floor(nums.length / 2);
  if (nums[mid] === target) {
    return mid + offset;
  } else if (nums[mid] < target) {
    return search(nums.slice(mid + 1), target, offset + mid + 1);
  } else if (nums[mid] > target){
    return search(nums.slice(0, mid), target, offset);
  }
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

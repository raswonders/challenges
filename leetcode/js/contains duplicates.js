function containsDuplicate(nums) {
    return nums.length === Array.from(new Set(nums)).length ?
        false :
        true;
}
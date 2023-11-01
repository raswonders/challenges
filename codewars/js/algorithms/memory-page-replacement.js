function lru(n, pageList) {
  let used = [];
  let mem = Array(n).fill(-1);
  for (let i = 0; i < pageList.length; i++) {
    let page = pageList[i];
    let freeIndex = mem.indexOf(-1);
    let isMemFull = freeIndex === -1;

    // update page usage info
    used = used.filter(item => item !== page);
    used.push(page);

    // write page into memory
    if (!mem.includes(page)) {
      if (isMemFull) {
        let leastRecent = used.shift();
        mem[mem.indexOf(leastRecent)] = page;
      } else {
        mem[freeIndex] = page;
      }
    }
  }

  return mem;
}

describe("Basic Tests", function () {
  const chai = require("chai"), { deepEqual } = chai.assert;
  chai.config.truncateThreshold = 0;

  function doTest(n, referenceList, expected) {
    const actual = lru(n, referenceList.slice());
    deepEqual(actual, expected, `N = ${n}, REFERENCE LIST = [${referenceList}]\n`);
  }

  it("Basic Tests", function () {
    const TESTS = [
      [3, [1, 2, 3, 4, 3, 2, 5], [5, 2, 3]],
      [5, [], [-1, -1, -1, -1, -1]],
      [4, [5, 4, 3, 2, 3, 5, 2, 6, 7, 8], [8, 6, 7, 2]],
      [4, [1, 1, 1, 2, 2, 3], [1, 2, 3, -1]],
      [1, [5, 4, 3, 3, 4, 10], [10]],
      [3, [1, 1, 1, 1, 1, 1, 1, 1], [1, -1, -1]],
      [5, [10, 9, 8, 7, 7, 8, 7, 6, 5, 4, 3, 4, 3, 4, 5, 6, 5], [5, 4, 3, 7, 6]]
    ];
    for (const [n, pageList, expected] of TESTS)
      doTest(n, pageList, expected);
  });
});
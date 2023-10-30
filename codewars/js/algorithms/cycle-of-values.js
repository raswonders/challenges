function cycle(dir, arr, curr) {
  let currPos = arr.indexOf(curr);
  let len = arr.length;

  return currPos === -1
    ? null
    : arr[(currPos + dir + len) % len];
}

// null
console.log(cycle(1, [], 0))

// 0
console.log(cycle(1, [0], 0))

// 1
console.log(cycle(1, [0,1], 0))

// 1
console.log(cycle(-1, [0,1], 0))

// 2
console.log(cycle(-1, [0,1,2], 0))

// 1
console.log(cycle(1, [0,1,1,2], 0))

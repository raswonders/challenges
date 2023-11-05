function tetris(moves) {
  const grid = Array(9).fill(0);
  let min = 0;
  let max = 0;

  for (let move of moves) {
    let pos = 4 + (move[1] === "R" ? +move[2] : -move[2]);
    let height = +move[0];
    grid[pos] += height;

    min = Math.min(...grid);
    max = Math.max(...grid);
    if (max - min >= 30) break;
  }

  return min;
}


// 0
console.log(tetris([]))

// 1
console.log(tetris(['1R4', '2L3', '3L2', '4L1', '1L0', '2R1', '3R2', '4R3', '1L4']));

// 0
console.log(tetris(['1L2', '4R2', '3L3', '3L1', '1L4', '1R4']))

// 3
console.log(tetris(['4R4', '4L3', '4L2', '4L1', '4L0', '4R1', '4R2', '4R3', '3L4']));

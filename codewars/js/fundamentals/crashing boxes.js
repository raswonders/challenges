function crashingWeights(grid) {
  return grid.reduce(combineRows);
};

function combineRows(rowAbove, row) {
  return row.map((weight, index) => {
    let weightAbove = rowAbove[index];
    return weight >= weightAbove
            ? weight
            : weight + weightAbove
  })
}

let example1 = [[1, 2, 3],
                [2, 3, 1],
                [3, 1, 2]];

console.log(crashingWeights(example1))
// [3, 4, 6]
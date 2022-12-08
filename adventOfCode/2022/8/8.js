const fs = require("fs");

fs.readFile("./input.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  // parsing data
  let rows = data.split(/\r?\n/);
  let height = rows.length;
  let width = rows[0].split("").length;
  let patch = rows.map(item => item.split(""));

  console.log(`${width} x ${height}`);
  console.log("Highest scenic score", getMaxScenicScore());
  console.log("no. trees visible", getVisibleCount());

  function getVisibleCount() {
    let visibleCount = 0;
    for (let row = 0; row < height; row++) {
      for (let col = 0; col < width; col++) {
        let candidate = Number(patch[row][col]);
        if (isEdgeTree(row, col)) {
          visibleCount++;
          continue;
        }

        let treesWest = patch[row].slice(0, col);
        let treesEast = patch[row].slice(col + 1);

        let treesNorth = [];
        for (let i = 0; i < row; i++) {
          treesNorth.push(patch[i][col]);
        }

        let treesSouth = [];
        for (let i = row + 1; i < height; i++) {
          treesSouth.push(patch[i][col]);
        }

        if (treesAreLower(treesNorth, candidate)) {
          visibleCount++;
          continue;
        }

        if (treesAreLower(treesEast, candidate)) {
          visibleCount++;
          continue;
        }

        if (treesAreLower(treesSouth, candidate)) {
          visibleCount++;
          continue;
        }

        if (treesAreLower(treesWest, candidate)) {
          visibleCount++;
          continue;
        }
      }
    }

    return visibleCount;
  }

  function getMaxScenicScore() {
    let scores = [];

    for (let row = 0; row < height; row++) {
      for (let col = 0; col < width; col++) {
        let candidate = patch[row][col];
        let treesWest = patch[row].slice(0, col).reverse();
        let treesEast = patch[row].slice(col + 1);

        let treesNorth = [];
        for (let i = 0; i < row; i++) {
          treesNorth.push(patch[i][col]);
        }
        treesNorth.reverse();

        let treesSouth = [];
        for (let i = row + 1; i < height; i++) {
          treesSouth.push(patch[i][col]);
        }

        let score =
          getViewDistance(treesWest, candidate) *
          getViewDistance(treesEast, candidate) *
          getViewDistance(treesNorth, candidate) *
          getViewDistance(treesSouth, candidate);

        scores.push(score);
      }
    }
    return Math.max(...scores);
  }

  function getViewDistance(trees, target) {
    let distance = 0;

    for (let tree of trees) {
      distance++;
      if (tree >= target) return distance;
    }
    return distance;
  }

  function isEdgeTree(row, col) {
    if (row === 0 || row === height - 1) return true;
    if (col === 0 || col === width - 1) return true;
    return false;
  }

  function treesAreLower(trees, target) {
    return !trees.filter(tree => tree >= target).length;
  }
});

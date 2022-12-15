const fs = require("fs");

let tailPositions = {
  positions: [[0, 0]],

  hasPosition(node) {
    return Boolean(
      this.positions.filter(item => item[0] === node[0] && item[1] === node[1])
        .length
    );
  },

  add(node) {
    if (this.hasPosition(node)) return;
    newNode = node.slice();
    this.positions.push(newNode);
  },

  increaseX() {
    this.positions.forEach(node => node[0]++);
  },

  increaseY() {
    this.positions.forEach(node => node[1]++);
  },

  get total() {
    return this.positions.length;
  }
};

class KnotsOnGrid {
  constructor() {
    this.grid = [["#*"]];
    this.nodes = new Array(10);
    for (let i = 0; i < 10; i++) {
      this.nodes[i] = [0, 0];
    }
    this.head = this.nodes[0];
    this.tail = this.nodes[9];
  }

  increaseX() {
    this.nodes.forEach(node => node[0]++);
  }

  increaseY() {
    this.nodes.forEach(node => node[1]++);
  }

  moveHead(vector) {
    // unmark old position
    this.unmarkHead();

    this.head[0] += vector[0];
    this.head[1] += vector[1];

    // if head gets beyond current grid borders -> autoexpand grid
    // and sanitize head coordinates
    if (this.head[0] >= this.grid[0].length) this.expandGridRight();
    if (this.head[1] >= this.grid.length) this.expandGridTop();
    if (this.head[0] < 0) {
      this.expandGridLeft();
      this.increaseX();
      tailPositions.increaseX();
    }
    if (this.head[1] < 0) {
      this.expandGridBot();
      this.increaseY();
      tailPositions.increaseY();
    }

    this.markHead();
    this.updateNodes();
  }

  markHead() {
    let value = this.grid[this.head[1]][this.head[0]];
    this.grid[this.head[1]][this.head[0]] = value + "*";
  }

  unmarkHead() {
    let value = this.grid[this.head[1]][this.head[0]];
    this.grid[this.head[1]][this.head[0]] = value.replace("*", "");
  }

  expandGridRight() {
    for (let row of this.grid) {
      row.push(".");
    }
  }

  expandGridLeft() {
    for (let row of this.grid) {
      row.unshift(".");
    }
  }

  expandGridTop() {
    let rowLen = this.grid[0].length;
    let newRow = Array(rowLen).fill(".");
    this.grid.push(newRow);
  }

  expandGridBot() {
    let rowLen = this.grid[0].length;
    let newRow = Array(rowLen).fill(".");
    this.grid.unshift(newRow);
  }

  updateTail() {
    if (this.isAroundHead()) return;

    let xDiff = (this.head[0] - this.tail[0]) / 2;
    let yDiff = (this.head[1] - this.tail[1]) / 2;

    let x = xDiff > 0 ? Math.ceil(xDiff) : Math.floor(xDiff);
    let y = yDiff > 0 ? Math.ceil(yDiff) : Math.floor(yDiff);

    let vector = [x, y];

    this.moveTail(vector);
  }

  updateNodes() {
    for (let i = 1; i < 10; i++) {
      let prev = this.nodes[i - 1];
      let curr = this.nodes[i];

      if (this.isAroundNode(prev, curr)) return;

      let xDiff = (prev[0] - curr[0]) / 2;
      let yDiff = (prev[1] - curr[1]) / 2;

      let x = xDiff > 0 ? Math.ceil(xDiff) : Math.floor(xDiff);
      let y = yDiff > 0 ? Math.ceil(yDiff) : Math.floor(yDiff);

      let vector = [x, y];
      this.moveNode(i, vector);
    }
  }

  moveNode(nodeIn, vector) {
    let node = this.nodes[nodeIn];
    this.grid[node[1]][node[0]] = ".";
    node[0] += vector[0];
    node[1] += vector[1];
    this.grid[node[1]][node[0]] = `${nodeIn}`;
    if (nodeIn === 9) tailPositions.add(node);
  }

  isAroundNode(prev, curr) {
    if (Math.abs(prev[0] - curr[0]) > 1) return false;
    if (Math.abs(prev[1] - curr[1]) > 1) return false;

    return true;
  }
}

fs.readFile("./input.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  const moveRegExp = /([URDL])\s+(\d+)/;
  const dirVectors = {
    U: [0, 1],
    R: [1, 0],
    D: [0, -1],
    L: [-1, 0]
  };

  let grid = new KnotsOnGrid();
  for (let instruction of data.split(/\r?\n/)) {
    let match, direction, distance;
    [match, direction, distance] = instruction.match(moveRegExp);

    for (let i = 1; i <= distance; i++) {
      grid.moveHead(dirVectors[direction]);
    }
  }

  console.log("visited count:", tailPositions.total);
});

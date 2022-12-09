const fs = require("fs");

class KnotsOnGrid {
  constructor() {
    this.grid = [['#*']];
    this.head = [0, 0];
    this.tail = [0, 0];
  }

  moveHead(vector) {
    // unmark old position
    this.unmarkHead()

    this.head[0] += vector[0];
    this.head[1] += vector[1];

    // if head gets beyond current grid borders -> autoexpand grid 
    // and sanitize head coordinates
    if (this.head[0] >= this.grid[0].length) this.expandGridRight();
    if (this.head[1] >= this.grid.length) this.expandGridTop();
    if (this.head[0] < 0) {
      this.expandGridLeft();
      this.head[0]++;
      this.tail[0]++;
    }
    if (this.head[1] < 0) {
      this.expandGridBot();
      this.head[1]++;
      this.tail[1]++;
    }

    this.markHead()
    this.updateTail();
  }

  markHead() {
    let value = this.grid[this.head[1]][this.head[0]];
    this.grid[this.head[1]][this.head[0]] = value + '*';
  }

  unmarkHead() {
    let value = this.grid[this.head[1]][this.head[0]];
    this.grid[this.head[1]][this.head[0]] = value.replace('*', '')
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
    let newRow = Array(rowLen).fill('.')
    this.grid.push(newRow);
  }

  expandGridBot() {
    let rowLen = this.grid[0].length;
    let newRow = Array(rowLen).fill('.')
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

  moveTail(vector) {
    this.tail[0] += vector[0];
    this.tail[1] += vector[1];

    // y-axis is inversed
    this.grid[this.tail[1]][this.tail[0]] = '#';
  }

  isAroundHead() {
    if (Math.abs(this.head[0] - this.tail[0]) > 1) return false;
    if (Math.abs(this.head[1] - this.tail[1]) > 1) return false;

    return true;
  }

  getVistedCount() {
    return this.grid.flat().join("").replace(/\*/g, "").replace(/\./g, "").length;
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

  console.log('visited count:', grid.getVistedCount());
});

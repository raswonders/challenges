export class Heap {
  constructor() {
    this.data = [];
  }

  rootNode() {
    return this.data[0];
  }

  lastNode() {
    return this.data.at(-1);
  }

  leftChildIndex(i) {
    return i * 2 + 1;
  }

  rightChildIndex(i) {
    return i * 2 + 2;
  }

  parentIndex(i) {
    return Math.floor((i - 1) / 2);
  }

  insert(value) {
    this.data.push(value);
    let newNodeIndex = this.data.length - 1;

    while (
      newNodeIndex > 0 &&
      this.data[newNodeIndex] > this.data[this.parentIndex(newNodeIndex)]
    ) {
      const parentIndex = this.parentIndex(newNodeIndex);
      [this.data[newNodeIndex], this.data[parentIndex]] = [
        this.data[parentIndex],
        this.data[newNodeIndex],
      ];
      newNodeIndex = parentIndex;
    }
  }
}

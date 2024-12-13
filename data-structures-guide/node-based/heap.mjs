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

  pop() {
    if (this.data.length === 1) {
      const deletedValue = this.rootNode();
      this.data = [];
      return deletedValue;
    }

    const deletedValue = this.rootNode();
    this.data[0] = this.data.pop();
    let trickleNodeIndex = 0;

    while (this.hasGreaterChild(trickleNodeIndex)) {
      const greaterChildIndex = this.findGreaterChildIndex(trickleNodeIndex);
      [this.data[trickleNodeIndex], this.data[greaterChildIndex]] = [
        this.data[greaterChildIndex],
        this.data[trickleNodeIndex],
      ];
      trickleNodeIndex = greaterChildIndex;
    }
  }

  hasGreaterChild(i) {
    return (
      this.data[this.leftChildIndex(i)] > this.data[i] ||
      this.data[this.rightChildIndex(i)] > this.data[i]
    );
  }

  findGreaterChildIndex(i) {
    const rightChildIndex = this.rightChildIndex(i);
    const leftChildIndex = this.leftChildIndex(i);

    if (
      rightChildIndex &&
      this.data[rightChildIndex] > this.data[leftChildIndex]
    ) {
      return rightChildIndex;
    } else {
      return leftChildIndex;
    }
  }
}

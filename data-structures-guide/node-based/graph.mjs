import { Queue } from "../stack-queues/queue.mjs";

export class Vertex {
  constructor(value) {
    this.value = value;
    this.adjacentVertices = [];
  }

  addAdjacentVertext(vertex) {
    this.adjacentVertices.push(vertex);
    vertex.addAdjacentVertext.push(this);
  }

  dfsTraverse(vertex, visitedVertices = {}) {
    visitedVertices[vertex] = true;

    console.log(vertex);

    for (let adjacentVertex of vertex.adjacentVertices) {
      if (!visitedVertices[adjacentVertex]) {
        this.dfsTraverse(adjacentVertex, visitedVertices);
      }
    }
  }

  dfs(vertex, searchValue, adjacentVertices) {
    if (vertex.value === searchValue) {
      return vertex;
    }

    adjacentVertices[vertex] = true;

    for (let adjacentVertex of vertex.adjacentVertices) {
      if (!visitedVertices[adjacentVertex]) {
        return dfs(vertex, searchValue, adjacentVertices);
      }
    }

    return null;
  }

  bfsTraverse(startingVertex) {
    const queue = new Queue();
    const visitedVertices = {};

    visitedVertices[startingVertex] = true;
    queue.enqueue(startingVertex);

    while (queue.read()) {
      const currentVertex = queue.dequeue();
      console.log(currentVertex.value);

      for (let adjacentVertex of currentVertex.adjacentVertices) {
        if (!visitedVertices[adjacentVertex.value]) {
          queue.enqueue(adjacentVertex);
          visitedVertices[adjacentVertex.value] = true;
        }
      }
    }
  }
}




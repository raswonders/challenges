import { Queue } from "../stack-queues/queue.mjs";

export class Vertex {
  constructor(value) {
    this.value = value;
    this.adjacentVertices = [];
  }

  addAdjacentVertex(vertex) {
    this.adjacentVertices.push(vertex);
  }
}

export function dfsTraverse(vertex, visitedVertices = {}) {
  visitedVertices[vertex.value] = true;
  console.log(vertex.value);

  for (let adjacentVertex of vertex.adjacentVertices) {
    if (!visitedVertices[adjacentVertex.value]) {
      dfsTraverse(adjacentVertex, visitedVertices);
    }
  }
}

export function dfs(vertex, searchValue, adjacentVertices) {
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
export function bfsTraverse(startingVertex) {
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

export class WeightedGraphVertex {
  constructor(value) {
    this.value = value;
    this.adjacentVertices = new Map();
  }

  addAdjacentVertex(vertex, weight) {
    this.adjacentVertices.set(vertex, weight);
  }
}

export class City {
  constructor(name) {
    this.name = name;
    this.routes = new Map();
  }

  addRoute(city, price) {
    this.routes.set(city, price);
  }
}

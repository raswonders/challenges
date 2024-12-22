import { Vertex } from "./graph.mjs";
import { Queue } from "../stack-queues/queue.mjs";

const idris = new Vertex("Idris");
const talia = new Vertex("Talia");
const ken = new Vertex("Ken");
const marco = new Vertex("Marco");
const sasha = new Vertex("Sasha");
const lina = new Vertex("Lina");
const kamil = new Vertex("Kamil");

idris.addAdjacentVertex(talia);
idris.addAdjacentVertex(kamil);
talia.addAdjacentVertex(idris);
talia.addAdjacentVertex(ken);
ken.addAdjacentVertex(talia);
ken.addAdjacentVertex(marco);
marco.addAdjacentVertex(ken);
marco.addAdjacentVertex(sasha);
sasha.addAdjacentVertex(marco);
sasha.addAdjacentVertex(lina);
lina.addAdjacentVertex(kamil);
lina.addAdjacentVertex(sasha);
kamil.addAdjacentVertex(lina);
kamil.addAdjacentVertex(idris);

function dijkstraShortestPath(startVertex, endVertex) {
  const minDistanceTable = {};
  minDistanceTable[startVertex.value] = 0;
  const prevVertexTable = {};
  const unvisited = new Queue();
  unvisited.enqueue(startVertex);
  const visited = new Set();
  while (unvisited.read()) {
    const currentVertex = unvisited.dequeue();
    visited.add(currentVertex.value);
    for (let adjacentVertex of currentVertex.adjacentVertices) {
      if (!visited.has(adjacentVertex.value)) {
        unvisited.enqueue(adjacentVertex);
      }

      let distanceThroughCurrent = minDistanceTable[currentVertex.value] + 1;
      if (
        minDistanceTable[adjacentVertex.value] === undefined ||
        minDistanceTable[adjacentVertex.value] > distanceThroughCurrent
      ) {
        minDistanceTable[adjacentVertex.value] = distanceThroughCurrent;
        prevVertexTable[adjacentVertex.value] = currentVertex.value;
      }
    }
  }

  let vertexValue = endVertex.value;
  const path = [vertexValue];
  while (prevVertexTable[vertexValue]) {
    path.push(prevVertexTable[vertexValue]);
    vertexValue = prevVertexTable[vertexValue];
  }

  return path.reverse();
}

console.log(dijkstraShortestPath(idris, lina));

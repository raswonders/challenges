export class Vertex {
  constructor(value) {
    this.value = value;
    this.adjacentVertices = [];
  }

  addAdjacentVertext(vertex) {
    this.adjacentVertices.push(vertex);
    vertex.addAdjacentVertext.push(this);
  }
}

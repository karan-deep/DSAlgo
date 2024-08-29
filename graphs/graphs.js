// Representations of Graph by Adjacency list

class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }
  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (vertex) => vertex !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (vertex) => vertex !== vertex1
    );
  }
  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }
}

let graph = new Graph();
graph.addVertex("Donut");
graph.addVertex("Tortillas");
graph.addVertex("Apple");
graph.addVertex("Lemon");
graph.addVertex("Hamburger");
graph.addEdge("Donut", "Tortillas");
graph.addEdge("Donut", "Apple");
graph.addEdge("Hamburger", "Tortillas");
graph.addEdge("Hamburger", "Donut");
graph.addEdge("Lemon", "Hamburger");
graph.addEdge("Lemon", "Apple");
graph.removeVertex("Donut");

console.log(graph.adjacencyList);

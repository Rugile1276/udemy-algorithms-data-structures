class Graph {
  constructor(){
    this.adjencyList = {}
  }
  addVertex(vertex){
    if(!this.adjencyList[vertex]){
      this.adjencyList[vertex] = [];
    }
  }
  addEdge(v1, v2){
    this.adjencyList[v1].push(v2);
    this.adjencyList[v2].push(v1);
  }
  removeEdge(v1, v2){
    this.adjencyList[v1] = this.adjencyList[v1].filter(
      value => value !== v2
    );

    this.adjencyList[v2] = this.adjencyList[v2].filter(
      value => value !== v1
    );
  }
  removeVertex(v){
    while(this.adjencyList[v].length){
     let currentVertex = this.adjencyList[v].pop();
     this.removeEdge(v, currentVertex);
    }
    delete this.adjencyList[v];
  }
}

var g = new Graph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");

g.addEdge("A", "B");

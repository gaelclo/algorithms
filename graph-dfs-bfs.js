class Node {
  constructor(value) {
    this.value = value;
    this.adjacents = [];
  }
  
  addAdjacent(node) {
    this.adjacents.push(node);
  }
  
  getAdjacents() {
    return this.adjacents;
  }
  
  getValue() {
    return this.value;
  }
  
  toString() {
    console.log(this.value);
  }
}

/* Undirected graph */
class Graph {
  constructor() {
    this.nodes = new Map();
  }
  
  getVertex(key) {
    return this.nodes.get(key);
  }
  
  addVertex(value) {
    if(this.nodes.has(value)) {
      return this.nodes.get(value);
    }
    else {
      const node = new Node(value);
      this.nodes.set(value, node);
      
      return node;
    }
  }
  
  addEdge(src, dst) {
    const nodeSrc = this.addVertex(src);
    const nodeDst = this.addVertex(dst);

    nodeSrc.addAdjacent(nodeDst);
    nodeDst.addAdjacent(nodeSrc);

    //return nodeSrc;
  }
  
  toString() {
    console.log(this.nodes.size);
    for(let o of this.nodes) {
      console.log(o);
    }
  }
  
  dfs(node) {
    let unseen = []; // as stack
    let seen = new Set();
    //console.log('dfs node',node);
    
    unseen.push(node);

    while(unseen.length>0) {
      //console.log('unseen', unseen);
      let curr = unseen.pop();
      if(curr && !seen.has(curr)) {
        console.log('curr', curr.getValue());
        seen.add(curr);
        curr.getAdjacents().forEach(a => unseen.push(a));
      }
    }
  }
  
  bfs(node) {
    let unseen = []; // as queue
    let seen = new Set();
    //console.log('dfs node',node);
    
    unseen.push(node);

    while(unseen.length>0) {
      //console.log('unseen', unseen);
      let curr = unseen.shift();
      if(curr && !seen.has(curr)) {
        console.log('curr', curr.getValue());
        seen.add(curr);
        curr.getAdjacents().forEach(a => unseen.push(a));
      }
    }
  }
}

let graph = new Graph();

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('A', 'D');
graph.addEdge('B', 'E');
graph.addEdge('D', 'F');
graph.addEdge('F', 'G');

graph.toString();
console.log('\n');
graph.dfs(graph.addVertex('A'));
console.log('\n');
graph.bfs(graph.addVertex('A'));




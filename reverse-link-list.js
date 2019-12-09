class Node {
  constructor(data, next=null) {
    this.next = next;
    this.data = data;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
  }
}

LinkedList.prototype.add = function(data) {
  let node = new Node();
  node.data = data;
  node.next = this.head;
  this.head = node;
}

LinkedList.prototype.reverse = function() {
  if(this.head!=null && this.head.next!=null) {
    let prev = null;
    let curr = this.head;
    let next = null;
    while(curr!=null) {
      next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    this.head = prev;
  }
}

LinkedList.prototype.reverseRecursive = function() {
  function reverse(node) {
    if(node==null || node.next==null) {
      return node;
    }
    
    let curr = reverse(node.next);
    node.next.next = node;
    node.next = null;
    
    return curr;
  }
  
  this.head = reverse(this.head);
}
  
LinkedList.prototype.display = function() {
  let curr = this.head;
  let output = "";
  while(curr!=null) {
    output += curr.data + " ";
    curr = curr.next;
  }
  console.log(output);
}

let list = new LinkedList();
list.add(4);
list.add(3);
list.add(2);
list.add(1);
list.display();
list.reverseRecursive();
list.display();

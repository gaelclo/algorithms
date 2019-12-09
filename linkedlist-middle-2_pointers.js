class Node {
  constructor(data, next=null) {
    this.next = next;
    this.data = data;
  }
  
  getData() {
    return this.data;
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
  
LinkedList.prototype.display = function() {
  let curr = this.head;
  let output = "";
  while(curr!=null) {
    output += curr.data + " ";
    curr = curr.next;
  }
  console.log(output);
}

LinkedList.prototype.middle = function() {
  let slow = this.head;
  let fast = this.head;
  while(fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }
  return slow;
}

let list = new LinkedList();
list.add(4);
list.add(3);
list.add(2);
list.add(1);
list.display();
console.log('middle', list.middle().getData());
list.add(5);
console.log('middle', list.middle().getData());



class Node {
  data;
  prev;
  next;
}

class DoubleList {
  head;
  tail;
  size = 0;
}

class LruCache {  
  caches = new Map();
  entries =  new DoubleList();

  add(data) {
    if(this.caches.has(data)) {
       this.caches.get(data).data = data;
    }
    else {
      if(this.entries.size==5) {
        this.deleteLast();
      }
      let newNode = new Node();
      newNode.data = data;
      newNode.prev = this.entries.head;
      
      if(this.entries.size==0) this.entries.tail = newNode;
      if(this.entries.head) this.entries.head.next = newNode;
      
      this.entries.head = newNode;
      
      this.caches.set(data, newNode);
      this.entries.size++;
    }
  }

  deleteLast() {
    if(this.entries.tail) {
      this.entries.tail = this.entries.tail.next;
      this.entries.tail.prev = null;
      this.entries.size--;
    }
  }

  show() {
    let output = "";
    let current = this.entries.head;
    while(current) {
      output += current.data + " ";
      current = current.prev;
    }
    return output;
  }

  showTable() {
    return this.caches;
  }
}

let cache = new LruCache();
cache.add(1);
cache.add(3);
cache.add(5);
cache.add(79);
cache.add(8);
cache.add(9);
cache.add(18);

cache.show();


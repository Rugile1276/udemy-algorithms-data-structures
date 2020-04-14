class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class doublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val){
    var node = new Node(val);
    if(this.length === 0){
      this.head = node;
      this.tail = node;
    }else{
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.length++;
    return this;
  }
  
  pop(){
    if(!this.head) return undefined;
    let poppedNode = this.tail;
    if(this.length == 1){
      this.head = null;
      this.tail = null;
    }else{
      this.tail = this.tail.prev;
      this.tail.next = null;
      poppedNode.prev = null;
    }
    this.length--;
    return poppedNode;
  }
}
var list = new doublyLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.pop();

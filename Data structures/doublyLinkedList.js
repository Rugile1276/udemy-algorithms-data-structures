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

  shift(){
    if(!this.head) return undefined;
    let shifteddNode = this.head;
    if(this.length == 1){
      this.head = null;
      this.tail = null;
    }else{
      this.head = this.head.next;
      this.head.prev = null;
      shifteddNode.next = null;
    }
    this.length--;
    return shifteddNode;
  }

  unshift(val){
    var node = new Node(val);
    if(this.length == 0){
      this.head = node;
      this.tail = node;
    }else{
      this.head.prev = node;
      node.next = this.head;
      this.head = node;
    }
    this.length++;
    return this;
  }

  get(index){
    if(index < 0 || index >= this.length) return null;
    let node = null;
    if(length/2 > index){
      let counter = 0;
      node = this.head;;
      while(counter !== index){
        node = node.next;
        counter++;
      }
    }else{
      let counter = this.length-1;
      node = this.tail;
      while(counter !== index){
        node = node.prev;
        counter--;
      }
    }
    return node;
  }

  set(index, val){
    let node = this.get(index);
    if(node){
      node.val = val;
      return true;
    }
    return false;
  }

  insert(index, val){

  }
}
var list = new doublyLinkedList();
list.push(1);
list.push(2);
list.push(3);

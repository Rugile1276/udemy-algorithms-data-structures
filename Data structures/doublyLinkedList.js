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
    if ( index < 0 || index > this.length) return false;
    if (index === 0) return this.unshift(val);
    if (index === this.length) return this.push(val);

    var newNode = new Node(val);
    var prevNode = this.get(index-1);
    var nextNode = prevNode.next;
    prevNode.next = newNode;
    newNode.prev = prevNode;
    newNode.next = nextNode;
    nextNode.prev = newNode;


    this.length++;
    return true;
  }
  remove(index){
    if( index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length-1) return this.pop();

    var prevNode = this.get(index-1);
    var removedNode = prevNode.next;
    var nextNode = removedNode.next;

    prevNode.next = nextNode;
    nextNode.prev = prevNode;
    removedNode.prev = null;
    removedNode.next = null;

    this.length--;
    return removedNode;
  }
  reverse(){
      var prevNode = null;
      var currNode = this.head;
      var nextNode = null;
      var i = 0;
      while(this.tail.next == null){
          nextNode = currNode.next;
          currNode.prev = nextNode;
          currNode.next = prevNode;

          prevNode = currNode;
          currNode = nextNode;
          i++;
      }

      var temp = this.head;
      this.head = this.tail;
      this.tail = temp;

      return this;
  }
}
var list = new doublyLinkedList();
list.push(1);
list.push(2);
list.push(3);

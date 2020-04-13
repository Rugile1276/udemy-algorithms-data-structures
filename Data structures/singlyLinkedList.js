class Node {
  constructor(val) {
    this.val = val;
    this.next = null;

  }
}

class SinglyLinkedList {
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;

  }
  push(val){
    var newNode = new Node(val);
    if(!this.head){
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop(){
    if(!this.head) return undefined;
    var current = this.head;
    var newTail = current;
    while(current.next){
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if(this.length == 0){
      this.head = null;
      this.tail = null;
    }
    return current;
  }
  shift(){
    if (!this.head) return undefined;
    var currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if(this.length == 0){
      this.tail = null;
    }
    return currentHead;

  }
  unshift(val){
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return newNode;

  }
  get(index){
    if((index < 0) || (index >= this.length)) return undefined;
    var counter = 0;
    var currNode = this.head;
    while(index > counter){
      currNode = currNode.next;
      counter++;
    }
    return currNode;
  }

  set(val, index){
    let node = this.get(index);
    if(node){
      node.val = val;
      return true;
    }
    return false;
  }

  insert(val, index){
    if(index > this.length || index < 0) return false;
    if(index === 0) return !!this.unshift(val);
    if(index === this.length) return !!this.push(val);

    var newNode = new Node(val);
    var prevNode = this.get(index-1);
    var nextNode = prevNode.next;
    newNode.next = nextNode;
    prevNode.next = newNode;
    this.length++;
    return true;

  }
  remove(index){
    if(index >= this.length || index < 0) return undefined;
    if(index === 0) return this.shift();
    if(index === this.length-1) return this.pop();

    var prevNode = this.get(index-1);
    var removed = prevNode.next;
    prevNode.next = removed.next;
    this.length--;
    return removed;

  }
}

var l = new SinglyLinkedList ();
l.push(1);
l.push(2);

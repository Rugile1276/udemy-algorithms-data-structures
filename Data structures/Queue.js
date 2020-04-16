class Node {
  constructor(val) {
    this.val = val;
    this.next = null;

  }
}

class Queue {
  constructor(){
    this.first = null;
    this.last = null;
    this.size = 0;

  }

  enqueue(val){
    var newNode = new Node(val);
    if(!this.first){
        this.first = newNode;
        this.last = newNode;
    }
    this.last.next = newNode;
    this.last = newNode;
    return ++this.size;

  }
  denqueue(){
    if(!this.first){
        return null;
    }
    var temp = this.first;
    if(this.first === this.last){
        this.first = null;
        this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.val;
  }
}

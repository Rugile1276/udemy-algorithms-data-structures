class Node {
  constructor(priority, val) {
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.val = [new Node(1, "a"), new Node(2, "aa"), new Node(3, "aaa")];
  }

  enqueque(val, priority){
    var newNode = new Node(val, priority);
    this.val.push(newNode);
    this.bubbleUp();
  }

  bubbleUp(){
    var elemIndx = this.val.length - 1;
    var element = this.val[elemIndx];

    while(elemIndx > 0){
      var parentIndx = Math.floor((elemIndx - 1)/2);
      var parent = this.val[parentIndx];

      if(element.priority >= parent.priority) break;
      this.val[elemIndx] = parent;
      this.val[parentIndx] = element;
      elemIndx = parentIndx;
    }
  }
  dequeue(){
    var min = this.val[0];
    var end = this.val.pop();
    if(this.val){
      this.val[0] = end;
      this.sinkDown();
    }
    return min;
  }

  sinkDown(){
    let idx = 0;
    let element = this.val[0];
    let length = this.val.length;

    while(true){
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild,rightChild;
      let swap = null;

      if(leftChildIdx < length){
          leftChild = this.val[leftChildIdx];
          if(leftChild.priority < element.priority) {
              swap = leftChildIdx;
          }
      }
      if(rightChildIdx < length){
          rightChild = this.val[rightChildIdx];
          if(
              (swap === null && rightChild.priority < element.priority) ||
              (swap !== null && rightChild.priority < leftChild.priority)
          ) {
             swap = rightChildIdx;
          }
      }
      if(swap === null) break;
      this.val[idx] = this.val[swap];
      this.val[swap] = element;
      idx = swap;
    }
  }
}

var q = new PriorityQueue();

q.enqueque(1,"LABAS");
q.dequeue();

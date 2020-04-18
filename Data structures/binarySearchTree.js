class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val){
    var newNode = new Node(val);
    if(this.root === null){
      this.root = newNode;
      return this;
    }else{
      var currNode = this.root;
      while(true){
        if(currNode.val > newNode){
          if(currNode.left === null){
            currNode.left = newNode;
            return this;
          }else{
            currNode = currNode.left;
          }
        }else{
          if(currNode.right === null){
            currNode.right = newNode;
            return this;
          }else{
            currNode = currNode.right;
          }
        }
      }
    }
  }
  find(val){
    if(this.root === null) return false;
    var current = this.root;
    while(current){
      if(current.val === val){
        return true;
      }else if(current.val > val){
        current = current.left;
      }else{
        current = current.right;
      }
    }
    return false;
  }
}

var bst = new BinarySearchTree();
bst.insert(1);
bst.insert(2);

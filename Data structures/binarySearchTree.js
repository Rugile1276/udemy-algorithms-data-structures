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
        if(currNode.val > newNode.val){
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
  DFSPreOrder(){
    if(this.root === null) return false;

    var visited = [];

    function traverse(node){
      visited.push(node.val);
      if(node.left !== null) traverse(node.left);

      if(node.right !== null) traverse(node.right);
    }
    traverse(this.root);
    return visited;
  }

   DFSPostOrder(){
    if(this.root === null) return false;

    var visited = [];

    function traverse(node){
      if(node.left !== null) traverse(node.left);

      if(node.right !== null) traverse(node.right);
      visited.push(node.val);
    }
    traverse(this.root);
    return visited;
  }

     DFSInOrder(){
    if(this.root === null) return false;

    var visited = [];

    function traverse(node){
      if(node.left !== null) traverse(node.left);
      visited.push(node.val);
      if(node.right !== null) traverse(node.right);
    }
    traverse(this.root);
    return visited;
  }

}

var bst = new BinarySearchTree();
bst.insert(5);
bst.insert(2);
bst.insert(4);
bst.insert(6);
bst.DFSInOrder();

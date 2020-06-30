class MaxBinaryTree {
  constructor() {
    this.val = [10,9,8,7];
  }
  //new elem put in the end of the list and bubble up till the right position
  insert(val){
    this.val.push(val);
    let currIndex = this.val.length - 1;
    let parentIndex = Math.floor((currIndex-1)/2);

    while(this.val[currIndex] > this.val[parentIndex] && parentIndex >= 0){
      this.swap(currIndex, parentIndex);
      currIndex = parentIndex;
      parentIndex = Math.floor((currIndex-1)/2);
    }
    return this.val;
  }
  swap(index1,index2){
    var temp = this.val[index1];
    this.val[index1] = this.val[index2];
    this.val[index2] = temp;
  }
  //Remove first elem from the list, last elem put as the root elem and sink it down(bubble down?) till the right position
  extractMax(){
    var max = this.val[0];
    this.val[0] = this.val[this.val.length-1];
    this.val.pop();
    var length = this.val.length;
    var currentParentIndx = 0;

    while(currentParentIndx < this.val.length - 1){
      var firstChildIndx = 2*currentParentIndx+1;
      var secondChildIndx = 2*currentParentIndx+2;
      var swap = null;
      var currentParent = this.val[currentParentIndx];

      if(firstChildIndx < length){
        var firstChild = this.val[firstChildIndx];
        if(currentParent < firstChild){
          swap = firstChildIndx;
        }
      }

      if(secondChildIndx < length){
        var secondChild = this.val[secondChildIndx];
        if (
         (swap === null && currentParent > secondChild) ||
         (swap !== null && firstChild < secondChild)
        ){
          swap = secondChildIndx;
        }
      }

      if(swap === null) break;
      this.swap(currentParentIndx, swap);
      currentParentIndx = swap;

    }
    return max;
  }
}

let mbt = new MaxBinaryTree();
mbt.extractMax();

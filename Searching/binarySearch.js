function binarySearch(arr, val){
    var middle = 0;
    var first = 0;
    var last = arr.length -1;
  while(first !== last){
      middle = Math.floor((first + last) /2);
      if(arr[middle] > val && arr
      [middle] !== val){
        last = middle - 1;
      }else if(arr[middle] < val && arr
      [middle] !== val){
        first = middle + 1;
      } else{
        return middle;
      }
      console.log("FIRST ", first, "SECOND ", last, "MIDDLE ", middle);
  }
  if(arr[first] === val){
    return first;
  }
  return -1;
}

binarySearch([1,2,3,4,5], 3);

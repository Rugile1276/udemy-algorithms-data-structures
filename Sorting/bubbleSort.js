function swap(arr, val1, val2){
  var temp = arr[val1];
  arr[val1] = arr[val2];
  arr[val2] = temp;
}

function bubbleSort (arr){
  var noSwap;
  for(var i=arr.length; i > 0; i--){
    noSwap = true;
    for(var j=0; j < i-1;j++){
      if(arr[j] > arr[j+1]){
        swap(arr, j, j+1);
        noSwap = false;
      }
    }
    if (noSwap) {
      return arr;
    };
  }
  return arr;
}

bubbleSort([5, 2, 3, 4, 1]);


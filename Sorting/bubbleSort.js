function swap(arr, val1, val2){
  var temp = arr[val1];
  arr[val1] = arr[val2];
  arr[val2] = temp;
}

function bubbleSort (arr){
  for(var i=arr.length; i > 0; i--){
    for(var j=0; j < i-1;j++){
      if(arr[j] > arr[j+1]){
        swap(arr, j, j+1);
      }
    }
  }
  return arr;
}

bubbleSort([5, 2, 3, 4, 1]);


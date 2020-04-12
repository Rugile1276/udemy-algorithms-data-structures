function merge (arr1, arr2){
  var i = 0;
  var j = 0;
  var newArr = [];
  while(i < arr1.length && j < arr2.length){
    if(
    arr1[i] < arr2[j]){
      newArr.push(arr1[i]);
      i++;
    }else{
      newArr.push(arr2[j]);
      j++;
    }
  }
  while(i < arr1.length){
      newArr.push(arr1[i]);
      i++;
  }
    while(j < arr2.length){
      newArr.push(arr2[j]);
      j++;
  }
  return newArr;
}

//merge([2, 2, 5], [1, 3, 7, 9, 20, 50]);

function mergeSort(arr){
  var middle = Math.floor(arr.length/2);
  var left;
  var right;

  if(arr.length <= 1) return arr;

  left = mergeSort(arr.slice(0, middle));
  right = mergeSort(arr.slice(middle, arr.length));

  return merge(left, right);
}

mergeSort([1, 6, 2, 5, 2, 1, 90, 50]);

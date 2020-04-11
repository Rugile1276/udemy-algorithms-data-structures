function selectionSort (arr){
  let first = 0;
  let second = 1;

  for(let i=0; i<arr.length-1; i++){
    console.log(arr[i]);
    min = i;
    for(let j = i+1; j< arr.length; j++){
      if(arr[min] > arr[j]){
        min = j;
      }
    }
    if(min !== i){
      let temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;

    }
  }
  return arr;
}

selectionSort([50, 2,5,1,90]);

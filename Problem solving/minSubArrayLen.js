function minSubArrayLen(arr, num) {
  let first = 0;
  let second = 0;
  let minLen = Infinity;
  let currentSum = 0;

  while(second <= arr.length){
    if(currentSum < num){
      currentSum = currentSum + arr[second];
      second++;
    }else{
      if ((minLen > (second - first))) minLen = second - first;
      if (minLen == 1) {
        return minLen;
      }
      currentSum = currentSum - arr[first];
      first++;
    }
  }
  if (minLen == Infinity) {
    return 0;
  }else {
    return minLen;
  }
}

minSubArrayLen([1,1,4,3],7);

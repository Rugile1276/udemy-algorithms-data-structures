// Find max subArr sum
function kadane (arr){
  var maxSum = arr[0];
  var currentSum = arr[0];

  for(var i=1; i < arr.length; i++){
    currentSum = Math.max(currentSum + arr[i], arr[i]);
    if (currentSum > maxSum){
      maxSum = currentSum;
    }

  }
  return maxSum;
}

function maxSubarraySum(arr, num) {
  let max = -Infinity;
  let sum = 0;

  if (arr.length < num) return null;

  for (var i = 0; i < num; i++) {
    sum = sum + arr[i];
  }

  for (var i = 0; i < arr.length; i++) {
    sum = sum - arr[i] + arr[i+num];
    if (sum > max) {
      max = sum;
    }
  }
  return max;
}

maxSubarraySum([1,2,3,4,5, 10, 5, 4], 2);

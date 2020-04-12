# udemy-algorithms-data-structures
JavaScript Algorithms and Data Structures Masterclass

## Problem solving patterns

1. Frequency Counter
  Uses objects or sets to collect VALUE and its FREQUNCIES.
  It helps to avoid nested loops or O(n^2) operations with arrays or string.
  E.g.:
  ```javascript
  ['accbacc'] => obj = {'a' : 2, 'b': 1, 'c': 4};
  ```
2. Multiple Pointers
  Creating pointers that correspond to an index or position and move towards the beggining, end or middle based on certain condition.
  Very efficient for solving problems with minimal space complexity
  For example we searching a pair, which sum is zero:
  ``javascript
  arr => [-2,-1,0,1,2]
  start => 0
  end => arr.length-1
  
  If arr[start]+arr[end] > 0 => end--;
  If arr[start]+arr[end] < 0 => star++;
  If arr[start]+arr[end] == 0 => return;
  ```

3. Sliding Window

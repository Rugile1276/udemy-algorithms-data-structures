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
  ```javascript
  arr => [-2,-1,0,1,2]
  start => 0
  end => arr.length-1
  If arr[start]+arr[end] > 0 => end--;
  If arr[start]+arr[end] < 0 => star++;
  If arr[start]+arr[end] == 0 => return;
  ```

3. Sliding Window
  Creates a 'window' variable, which helps to track a subset of array/string.
  E.g. if we need to find max sum of n consecutive numbers in the array, we don't have to make nested loop:
  ```javascript
  //Count first sum
  for(let i=0;i<n;i++){
    maxSum += arr[i];
  }
  //Create another loop and subtract&add from the already counted maxSum
  for(let i=0;i<n;i++){
    tempSum = tempSum - arr[i-num] + arr[i];
    maxSum = Math.max(maxSUm, tempSum);
  }
  ```

## Recursion

  The process that calls itself.
  Everytime the function is called, its pushed on the top of call stack. The functions below is waiting for the top function to finish.

  Recursive functions should have two things:
  1. Base case - the condition when recursion ends.
  2. Each time function called, it should be different inputs.

  ```javascript
  //FACTORIAL SOLUTION
  function factorial(x){
     if (x < 0 ) return 0;
     if (x <= 1 ) return 1;
     return x * factorial(x-1);
  }
  ```

## Search Algorithms

  1. Linear Search
  Look every element in the array and check if it's a value we need
  2. Binary Search
  Only works on sorted array. Find element in the middle, and check if it lower or higher than needed value. Take the corresponding half of array and repeat that until you find the right value,
  ```javascript
  //FACTORIAL SOLUTION
  middle = Math.floor((first + last) /2);
  if (arr[middle] < n ) take right side of arr and repeat;
  if (arr[middle] > n ) take left side of arr and repeat;
  if (arr[middle] == n ) we found needed number;
  ```
## Sorting

  1. Bubble Sort

  The largest values bubble up to the top.
  ```javascript
  if (arr[j] > arr[j+1] ) => swap!
  ```
  2. Selection Sort

  First places smallest values in the sorted position.
  ```javascript
  if(arr[min] > arr[j]){
        min = j;
      }
  if(min !== comparableNum) => swap;
  ```

  3. Insertion Sort

  Gradually creates left portion of array which is always sorted.
  ```javascript
  E.g.: [5,3,4]
  [5] - sorted
  [3,5] - were to put 3?
  [3,4,5] - were to put 4?
  ```

  4. Merge Sort

  Exploits the fact that arrays of length 0,1 is already sorted.
  It decompose array into smaller array(length of 0 or 1) and then builds up new sorted array.
  Complexity is 0(n log n) (counts decomposition and merges)

## Data Structures

  1. Singly Linked Lists
    Consist of nodes, and each node has a value and a pointer to another node or null.
    It has head (beginning), tail(end), length.
    It's really fast, when you need to insert or remove from the beginning or end. But if you need to access random items, better to use arrays.
    push - adds to the end;
    pop - removes from end;
    shift - removes from beginning
    unshift - adds node to the beginning
    get(index) - retrieve element by its position
    set(val, index) - set value to specific index
    insert(val, index) - insert value at specific index
    remove(index) - remove value at specific index
    reverse - reverse list

  2. Doubly Linked Lists
    Consist of nodes, and each has a value and two pointers - previous and next.
    It has head( the beginning which doesn't have previous) and tail(the end which doesn't have next)
    It's fast when adding/removing from the beginning AND the end(not like the SLL), but it eats more memory to store both pointers - prev and next than SLL.
    Good example of DLL is web browser history.

  3. Stack
  Last In First Out - LIFO.
  We can use array for it and you push and pop, or unshift and shift. Push and pop is better, because we don't need to reindex. But there is no need to track all indexes, because we only need last one inserted.

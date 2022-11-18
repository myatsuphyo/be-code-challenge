# BE-code-challenge
## Shifted List Search

We have a list of ordered integers (ex: `[1, 3, 7, 8, 9, 10, 11]`). Suppose we slice into that list at a random index and append the "top" half of list to the "bottom" (maintaining the order of both halves while doing so).

**Challenge:** Write a function that returns the largest integer in the "shifted" list.

View the samples below for a better understanding of how the lists are mutated:

```javascript
// Sample 1
const initialList = [1, 3, 7, 8, 9, 10, 11];  // Here is our initial ordered list
const shiftedList = [8, 9, 10, 11, 1, 3, 7];  // Here is the list after it has been sliced (at index 3) and shifted
// Your function should return `11`

// Sample 2
const initialList = [2, 4, 6, 8, 10];  // Here is our initial oredered list
const shiftedList = [6, 8, 10, 2, 4];  // Here is the list after it has been sliced (at index 2) and shifted
// Your function should return `10`

// Sample 3
const initialList = [2, 4, 6, 8, 10];  // Here is our initial oredered list
const shiftedList  = [2, 4, 6, 8, 10];  // Here is the list after it has been sliced (at index 0) and shifted
// Your function should return `10`
```
## Solution

Binary Search is used to search the largest number. Since, the array can be unsorted after it's shifted, we consider following conditions during the binary search. 
- if there is only 1 index, the largest number is the **first index**.
- if **last index** is larger than both its previous index and first index, the largest number is the last index.
- if **first index** is larger than both its next index and last index, the largest number is the first index.
- if **middle index** is larger than both previous and next indices, the largest number is the middle index.
- else (1. if middle index is larger than last index, the largest number is in first half. 2. else it is in the second half.)


## Tests

Run following command to run all tests. 

```sh
$ node test.js
```


## Notes
1. To identify any edge cases that we need to account for?
  - Negative numbers, I did not consider negative numbers in my current version for now. If this is in my real life coding tasks, I would confirm we need to consider negative numbers first before I add more complex conditions to the implementation.
2. To explain the orders of growth implications of the algorithm you implemented?
  - Since I've used the binary search, the algorithm runs in O(log n) time. If I have chosen Liner Search, it would run in O(n) time.
3. Suppose our initial list contains 1 million elements, is there a more performant way we can find the answer?
  - Performance-wise, using streams is recommended to handle 1 million elements. 1 million elements can be divided and put into async queue. Recursively, results of all async queues can be compared again to find the largest number.

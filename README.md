# be-code-challenge
BE Code Challenge

1. To identify any edge cases that we need to account for?
  - Negative numbers, I did not consider negative numbers in my current version for now. If this is in my real life coding tasks, I would confirm we need to consider negative numbers first before I add more complex conditions to the implementation.
2. To explain the orders of growth implications of the algorithm you implemented?
  - Since I've used the binary search, the algorithm runs in O(log n) time. If I have chosen Liner Search, it would run in O(n) time.
3. Suppose our initial list contains 1 million elements, is there a more performant way we can find the answer?
  - Performance-wise, using streams is recommended to handle 1 million elements. 1 million elements can be divided and put into async queue. Recursively, results of all async queues can be compared again to find the largest number.

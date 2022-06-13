// given a sequence of numbers, find the largest pair sum in the sequence

// example:
// [10, 14, 2, 23, 19] => 42 (23 + 19)

function largestPairSum(numbers) {
  // sort the numbers, smallest to largest
  const sorted = numbers.sort((a, b) => a - b);
  // slice(-2) returns two largest integers from array
  // reduce accumulates those two numbers
  return sorted.slice(-2).reduce((a, b) => a + b);
}

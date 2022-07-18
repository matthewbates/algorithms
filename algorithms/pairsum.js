// write a function that takes in an array and a target sum as arguments
// the function should return an array containing a pair of indices whose
// elements sum to the given target
// there is guranteed to be one such pair that sums to the target

// *brute force (nested loop, O(n^2))*
function pairSum(numbers, targetSum) {
  let nums = [];

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === targetSum) {
        nums.push(i, j);
      }
    }
  }
  return nums;
}

console.log(pairSum([1, 3, 4, 7, 9], 8));
